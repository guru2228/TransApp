using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using NLog;
using TransApp.Site.Filters;
using NLog.Extensions.Logging;
using NLog.Targets;
using TransApp.Application.Authentication.TokenProvider;
using TransApp.Persistence;

namespace TransApp.Site
{
    public class Startup
    {
        /// <summary>
        /// Gets the <see cref="ILoggerFactory"/> instance.
        /// </summary>
        public ILoggerFactory LoggerFactory { get; }

        public Startup(IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            LoggerFactory = loggerFactory;
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {          
            // *If* you need access to generic IConfiguration this is **required**
            services.AddSingleton<IConfiguration>(Configuration);
            // Add framework services.
            services.Configure<SiteDbContext>(Configuration.GetSection("ConnectionString"));

            //// Add global exception filter, all error exceptions are caught in here
            var builder = services.AddMvc();
            builder.AddMvcOptions(o => { o.Filters.Add(new GlobalExceptionFilter(this.LoggerFactory)); });

            //// set DI
           // AddDependencyInjection(services);

            AddPoliciesAuthorization(services);

            services.AddMemoryCache();

            services.AddAuthentication();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory,
            IServiceScopeFactory scopeFactory)
        {

            // This stuff should be routed to angular
            // middleware used to rewrite the path on the Request
            app.Use(async (context, next) =>
            {
                await next();

                if (context.Response.StatusCode == 404 &&
                    !Path.HasExtension(context.Request.Path.Value) &&
                    !context.Request.Path.Value.StartsWith("/api/"))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });

            //// seed data
            if (Configuration.GetValue<bool>("ApplicationSettings:SeedData"))
            {
               // scopeFactory.SeedDataTranslations();
            }

            //// add nlog
            loggerFactory.AddNLog();
            //foreach (var target1 in LogManager.Configuration.AllTargets.Where(t => t is DatabaseTarget))
            //{
            //    var target = (DatabaseTarget)target1;
            //    target.ConnectionString = Configuration.GetSection("ConnectionString:DefaultConnectionString").Value;
            //}
        
            try
            {
                ConfigureAuth(app);
                app.UseDefaultFiles();
                app.UseStaticFiles();
                //// configuring routing, add a route for single page application to match all urls, in this way, angular routing is used.
                app.UseMvc(routes =>
                {
                    routes.MapRoute(
                        "default",
                        "{controller=Home}/{action=Index}/{id?}");
                    // in case multiple SPAs required.
                    // routes.MapSpaFallbackRoute("spa-fallback", new { controller = "home", action = "index" });
                    routes.MapRoute(
                        "transapp-spa",
                        "{*url}",
                        new { controller = "Home", action = "Index" });
                });
            }
            catch (Exception ex)
            {
                app.Run(
                    async context =>
                    {
                        //// log error
                        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                        context.Response.ContentType = "text/plain";
                        await context.Response.WriteAsync(ex.Message).ConfigureAwait(false);
                        await context.Response.WriteAsync(ex.StackTrace).ConfigureAwait(false);
                    });
            }
        }

        #region Private Methods

        /// <summary>
        /// Configure token based authentication
        /// </summary>
        /// <param name="app"></param>
        public void ConfigureAuth(IApplicationBuilder app)
        {
            // The secret key every token will be signed with.
            // Keep this safe on the server!
            string secretKey = Configuration.GetValue<string>("TokenProviderOptions:SecretKey");
            var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secretKey));

            app.UseTokenProvider(new TokenProviderOptions
            {
                Path = Configuration.GetValue<string>("TokenProviderOptions:Path"),
                Audience = Configuration.GetValue<string>("TokenProviderOptions:Audience"),
                Issuer = Configuration.GetValue<string>("TokenProviderOptions:Issuer"),
                Expiration = TimeSpan.FromMinutes(Configuration.GetValue<int>("TokenProviderOptions:Expiration")),
                SigningCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256),
                CookieOptions = new CookieOptions
                {
                    HttpOnly = true,
                    Secure = Configuration.GetValue<bool>("TokenProviderOptions:SecureCookie")//,
                                                                                              // Expires = DateTime.UtcNow.Add(TimeSpan.FromMinutes(Configuration.GetValue<int>("TokenProviderOptions:Expiration")))
                }
            });

            var tokenValidationParameters = new TokenValidationParameters
            {
                // The signing key must match!
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = signingKey,

                // Validate the JWT Issuer (iss) claim
                ValidateIssuer = true,
                ValidIssuer = Configuration.GetValue<string>("TokenProviderOptions:Issuer"),

                // Validate the JWT Audience (aud) claim
                ValidateAudience = true,
                ValidAudience = Configuration.GetValue<string>("TokenProviderOptions:Audience"),

                // Validate the token expiry
                ValidateLifetime = true,

                // If you want to allow a certain amount of clock drift, set that here:
                ClockSkew = TimeSpan.Zero
            };

            //// enable it if jwt bearer is passed throgh header
            //app.UseJwtBearerAuthentication(new JwtBearerOptions
            //{
            //    AutomaticAuthenticate = true,
            //    AutomaticChallenge = true,
            //    TokenValidationParameters = tokenValidationParameters
            //});

            // If an incoming cookie named access_token contains a valid JWT, your protected MVC or Web API routes will be authorized. 
            // If you want, you can do additional validation of the JWT claims (or copy the JWT claims into the ClaimsPrincipal object) inside of CustomJwtDataFormat.Unprotect.
            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AutomaticAuthenticate = true,
                AutomaticChallenge = true,
                AuthenticationScheme = "Cookie",
                CookieName = "access_token",
                TicketDataFormat = new JwtCookieValidator(
                    SecurityAlgorithms.HmacSha256,
                    tokenValidationParameters)
            });
        }


        /// <summary>
        /// Add authorization policies
        /// </summary>
        /// <param name="services"></param>
        public void AddPoliciesAuthorization(IServiceCollection services)
        {
            services.AddAuthorization(options =>
            {
                options.AddPolicy("HawWebUser",
                                  policy => policy.RequireClaim("User", "IAmTransAppUser"));
            });
        }

        #endregion
    }
}

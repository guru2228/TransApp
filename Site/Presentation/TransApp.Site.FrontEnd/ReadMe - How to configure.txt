
Configure MVC
1. need to add these two packages to project.json file:
	"Microsoft.AspNetCore.Mvc": "1.0.1",
	"Microsoft.AspNetCore.StaticFiles": "1.0.0",
2. modify the Startup class:
	public class Startup
	{
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddMvc();
		}

		public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
		{
			loggerFactory.AddConsole();

			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}

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

			app.UseMvc();
			app.UseStaticFiles();
		}
	}

Frontend project
	1. install Angular CLI with: npm install -g angular-cli
	2. cd to the Frontend directory and run ng init --name ProjectName
	3. npm start

Proxy to the API
1. create a file called proxy.conf.json
	{
	  "/api": {
		"target": "http://localhost:65498",
		"secure": false
	  }
	}	
The target value contains a port number. If you’re using Visual Studio, you can read it from Backend project properties.
2. modify npm start script, so it uses the proxy configuration. Open package.json in the Frontend project, find the scripts section and modify start command to: "start": 
"ng serve --proxy-config proxy.conf.json"

Build config
1. The CLI tool, by default, creates the files in the dist directory. We will change it to wwwroot in our backend app. For that, open angular-cli.json file and edit outDir property:
"outDir": "../Backend/wwwroot"

Development
	You can find all the details in the documentation: https://github.com/angular/angular-cli
	ng g component my-new-component
	ng g directive my-new-directive
	ng g pipe my-new-pipe
	ng g service my-new-service
	ng g module my-module

Building for deployment
	To deploy the app, you need to first build the angular2 app with ng build command. It will transpile and bundle all needed files and copy everything, including static files, to wwwroot folder of the backend application. When it’s done, you can use Publish option in Visual Studio to generate the whole package.

https://devblog.dymel.pl/2016/10/25/angular2-cli-with-aspnet-core-application-tutorial/
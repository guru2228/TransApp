﻿using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http.Authentication;
using Microsoft.IdentityModel.Tokens;

namespace TransApp.Application.Authentication.TokenProvider
{
    /// <summary>
    /// Out of the box, the ASP.NET Core cookie authentication middleware doesn’t support validating JWTs passed via cookies.
    /// You’ll need to create a custom ISecureDataFormat implementation that validates a JWT string.
    /// </summary>
    public class JwtCookieValidator : ISecureDataFormat<AuthenticationTicket>
    {
        private readonly string _algorithm;
        private readonly TokenValidationParameters _validationParameters;

        public JwtCookieValidator(string algorithm, TokenValidationParameters validationParameters)
        {
            this._algorithm = algorithm;
            this._validationParameters = validationParameters;
        }

        public AuthenticationTicket Unprotect(string protectedText)
            => Unprotect(protectedText, null);

        /// <summary>
        /// Validate token
        /// </summary>
        /// <param name="protectedText"></param>
        /// <param name="purpose"></param>
        /// <returns></returns>
        public AuthenticationTicket Unprotect(string protectedText, string purpose)
        {
            var handler = new JwtSecurityTokenHandler();
            ClaimsPrincipal principal = null;

            try
            {
                SecurityToken validToken = null;
                principal = handler.ValidateToken(protectedText, this._validationParameters, out validToken);

                var validJwt = validToken as JwtSecurityToken;

                if (validJwt == null)
                {
                    throw new ArgumentException("Invalid JWT");
                }

                if (!validJwt.Header.Alg.Equals(_algorithm, StringComparison.Ordinal))
                {
                    throw new ArgumentException($"Algorithm must be '{_algorithm}'");
                }

                // Additional custom validation of JWT claims here (if any)
            }
            catch (SecurityTokenValidationException)
            {
                return null;
            }
            catch (ArgumentException)
            {
                return null;
            }

            // Validation passed. Return a valid AuthenticationTicket:
            return new AuthenticationTicket(principal, new AuthenticationProperties(), "Cookie");
        }

        // This ISecureDataFormat implementation is decode-only
        public string Protect(AuthenticationTicket data)
        {
            throw new NotImplementedException();
        }

        public string Protect(AuthenticationTicket data, string purpose)
        {
            throw new NotImplementedException();
        }
    }
}

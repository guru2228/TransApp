using Microsoft.AspNetCore.Mvc.Filters;

namespace TransApp.Site.Filters
{
    namespace Microsoft.AspNetCore.Mvc.Filters
    {
        /// <summary>
        /// Exception filter
        /// </summary>
        public interface IExceptionFilter : IFilterMetadata
        {
            /// <summary>
            /// On exception
            /// </summary>
            /// <param name="context"></param>
            void OnException(ExceptionContext context);
        }
    }
}

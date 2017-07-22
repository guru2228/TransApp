namespace TransApp.Core.Logging
{
    /// <summary>
    /// Logger used to add info, or logging informations inside application
    /// </summary>
    public interface IApplicationLogger
    {
        /// <summary>
        /// LogInformation
        /// </summary>
        /// <param name="category"></param>
        /// <param name="message"></param>
        void LogDebug(LoggingCategory category, string message);

        /// <summary>
        /// LogInformation
        /// </summary>
        /// <param name="category"></param>
        /// <param name="message"></param>
        void LogInformation(LoggingCategory category, string message);

        /// <summary>
        /// LogWarning
        /// </summary>
        /// <param name="category"></param>
        /// <param name="message"></param>
        void LogWarning(LoggingCategory category, string message);

        /// <summary>
        /// LogError
        /// </summary>
        /// <param name="category"></param>
        /// <param name="message"></param>
        void LogError(LoggingCategory category, string message);
    }
}

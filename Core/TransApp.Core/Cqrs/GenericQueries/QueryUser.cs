namespace TransApp.Core.Cqrs.GenericQueries
{
    public class Query : IQuery
    {
        /// <summary>
        /// Username.
        /// </summary>
        public string Username { get; set; }

        /// <summary>
        /// Language.
        /// </summary>
        public string Language { get; set; }
    }
}

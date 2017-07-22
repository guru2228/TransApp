namespace TransApp.Core.Cqrs
{
    /// <summary>
    /// Marker interface to mark a query
    /// </summary>
    public interface IQuery
    {
        /// <summary>
        /// Language.
        /// </summary>
         string Language { get; set; }
    }
}
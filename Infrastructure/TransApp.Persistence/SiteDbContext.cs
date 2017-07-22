namespace TransApp.Persistence
{
    public class SiteDbContext
    {
        public string DefaultConnectionString { get; set; }
        public string ApiConnectionString { get; set; }
        public string CommandTimeout { get; set; }//not functional
    }
}

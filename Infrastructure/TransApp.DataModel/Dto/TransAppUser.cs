namespace TransApp.DataModel.Dto
{
    public class TransAppUser : IDataAccessObject
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public string Password { get; set; }
    }
}

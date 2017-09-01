using System;

namespace TransApp.DataModel.Dto
{
    public class User : IDataAccessObject
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Login { get; set; }

        public string Password { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? UserIdCreated { get; set; }

        public DateTime? DateModified { get; set; }

        public int? UserIdModified { get; set; }

    }

}

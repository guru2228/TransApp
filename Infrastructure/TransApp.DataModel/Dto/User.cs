﻿using System;

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

        public DateTime? UserIdCreated { get; set; }

        public int? DateCreated { get; set; }

        public DateTime? UserIdModified { get; set; }

        public int? DateModified { get; set; }

    }

}

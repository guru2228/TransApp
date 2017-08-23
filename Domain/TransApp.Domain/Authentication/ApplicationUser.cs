﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.Domain.Authentication
{
    public class ApplicationUser
    {
        public int Id { get; set; }

        public string Login { get; set; }

        public string FirstName { get; set; }

        public string Name { get; set; }

        public string Password { get; set; }

        public int? CustomerId { get; set; }
       
    }
}

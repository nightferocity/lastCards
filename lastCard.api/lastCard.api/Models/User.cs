﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lastCard.api.Models
{
        public class User
        {
            public Guid Id { get; set; }
            public string Login { get; set; }
            public string FullName { get; set; }
            public string Password { get; set; }
        }
}

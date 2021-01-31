﻿using System;
using System.Collections.Generic;
using System.Text;

namespace BookStore.Domain.Models
{
    public class AppUser : Entity
    {
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}

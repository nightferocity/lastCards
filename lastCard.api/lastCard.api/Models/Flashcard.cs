using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lastCard.api.Models
{
    public class Flashcard
    {
        public Guid Id { get; set; }
        public string OnEnglish { get; set; }
        public string  OnRussian { get; set; }
        public int CountOfAttempts { get; set; }
        public int CountOfGuessing { get; set; }
    }
}

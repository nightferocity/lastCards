using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using lastCard.api.Models;

namespace lastCard.api.DAO
{
    public class FlashcardContext: DbContext
    {
        public FlashcardContext(DbContextOptions<FlashcardContext> options)
    : base(options)
        { }

        public DbSet<Flashcard> Flashcards { get; set; }
    }
}

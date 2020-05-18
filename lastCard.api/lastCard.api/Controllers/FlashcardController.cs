using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewFeatures;

using lastCard.api.DAO;
using lastCard.api.Models;

namespace lastCard.api.Controllers
{
    [Route("[controller]")]
    public class FlashcardController : Controller
    {
        private readonly FlashcardContext _context;


        public FlashcardController(FlashcardContext context)
        {
            _context = context;
        }

        // GET: /flashcard
        [HttpGet]
        public IEnumerable<Flashcard> GetAll()
        {
            return _context.Flashcards.ToList();
        }

        // GET /flashcard/id
        [HttpGet("{id}", Name = "GetFlashcard")]
        public IActionResult Get(string id)
        {
            var card = _context.Flashcards.Find(new Guid(id));
            if (card == null) return NotFound();

            return new ObjectResult(card);
        }

        // POST /flashcard
        [HttpPost]
        public IActionResult Post([FromBody]Flashcard card)
        {
            if (card == null)
            {
                return BadRequest();
            }
            card.Id = Guid.NewGuid();
            _context.Add(card);
            _context.SaveChanges();

            return CreatedAtRoute("GetFlashcard", new { id = card.Id.ToString() }, card);
        }

        // PUT /flashcard/id
        [HttpPut("{id}")]
        public IActionResult Put(string id, [FromBody]Flashcard card)
        {
            if (card == null || card.Id.ToString() != id)
            {
                return BadRequest();
            }

            try
            {
                if (!_context.Flashcards.Any(c => c.Id == card.Id))
                {
                    throw new ArgumentException($"Flashcard with id: {card.Id} not found");
                }
                _context.Update(card);
                _context.SaveChanges();
                return new NoContentResult();
            }
            catch (ArgumentException)
            {
                return NotFound();
            }
        }

        // DELETE /flashcard/id
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            try
            {
                var flashcard = _context.Flashcards.Find(new Guid(id));
                if (flashcard == null) throw new ArgumentException($"Flashcard with id: {id} not found");
                _context.Flashcards.Remove(flashcard);
                _context.SaveChanges();
                return new NoContentResult();
            }
            catch (ArgumentException)
            {
                return NotFound();
            }
        }
    }
}

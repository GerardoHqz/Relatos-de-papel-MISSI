import { Star } from 'lucide-react'
import BookCard from '../components/BookCard/BookCard'
import { books } from '../data/books'

const Catalog = ({ searchQuery = '', addToCart }) => {
  const normalizedQuery = searchQuery.trim().toLowerCase()
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(normalizedQuery),
  )

  const recommended = books.slice(0, 4)
  const heading = normalizedQuery ? `Resultados para "${searchQuery}"` : 'Todos los libros'

  return (
    <section className="catalog">
      {!normalizedQuery && (
        <section className="catalog__section catalog__section--highlight">
          <div className="catalog__section-header">
            <h2 className="catalog__title">
              <Star className="catalog__star" fill="currentColor" />
              Recomendados para ti
            </h2>
          </div>

          <div className="catalog__grid">
            {recommended.map((book) => (
              <BookCard key={book.id} book={book} onAddToCart={addToCart} />
            ))}
          </div>
        </section>
      )}

      <section className="catalog__section">
        <div className="catalog__section-header">
          <div>
            <h2 className="catalog__title">{heading}</h2>
            <p className="catalog__subtitle">
              {filteredBooks.length} resultado{filteredBooks.length === 1 ? '' : 's'}
            </p>
          </div>
        </div>

        {filteredBooks.length === 0 ? (
          <div className="catalog__empty">
            <p>No encontramos libros que coincidan con tu busqueda.</p>
            <p>Prueba con otro titulo, autor o ISBN.</p>
          </div>
        ) : (
          <div className="catalog__grid">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} onAddToCart={addToCart} />
            ))}
          </div>
        )}
      </section>
    </section>
  )
}

export default Catalog

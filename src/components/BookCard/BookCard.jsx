import { Link } from 'react-router-dom'
import { ShoppingCart, ArrowRight, Star } from 'lucide-react'
import './BookCard.css'

const BookCard = ({ book, onAddToCart }) => {
  const handleAdd = () => {
    if (onAddToCart) {
      onAddToCart(book)
    }
  }

  return (
    <article className="book-card">
      <Link to={`/book/${book.id}`} className="book-card__image-wrap">
        <img src={book.image} alt={book.title} className="book-card__image" />
      </Link>

      <div className="book-card__body">
        <div className="book-card__header">
          <Link to={`/book/${book.id}`} className="book-card__title">
            {book.title}
          </Link>
          <p className="book-card__author">{book.author}</p>
        </div>

        <p className="book-card__description">{book.description}</p>

        <div className="book-card__meta">
          <span className="book-card__price">${book.price.toFixed(2)}</span>
          <span className="book-card__rating">
            <Star size={16} /> 4.8
          </span>
        </div>

        <div className="book-card__actions">
          <button type="button" className="book-card__button" onClick={handleAdd}>
            <ShoppingCart size={18} />
            Añadir
          </button>
          <Link to={`/book/${book.id}`} className="book-card__detail">
            Ver detalle <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default BookCard

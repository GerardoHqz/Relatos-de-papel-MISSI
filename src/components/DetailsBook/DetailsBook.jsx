import { Link, useParams, useNavigate } from 'react-router-dom'
import { books } from '../../data/books'
import './DetailsBook.css'

const DetailsBook = ({ addToCart = () => {} }) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const bookId = Number.parseInt(id, 10)
    const book = books.find(book => book.id === bookId)

    if (!book) {
        return (
            <div className="container">
                <Link to="/catalog" className="back-link">← Volver al catálogo</Link>
                <div className="error-message">
                    <h2>Libro no encontrado</h2>
                    <p>El libro que buscas no existe en nuestro catálogo.</p>
                </div>
            </div>
        )
    }

      const handleAddToCart = () => {addToCart(book)}
      const handleGoToCart = () => {navigate('/cart')}

    return (
        <div className="container">
            <Link to="/catalog" className="back-link">← Volver al catálogo</Link>
            <div className="product-card">
                <div className="product-image">
                    <img src={book.image} alt={book.title} />
                </div>

                <div className="product-info">
                    <span className="category-badge">{book.category}</span>
                    
                    <h1>{book.title}</h1>
                    <p className="author">{book.author}</p>

                    <div className="meta-data">
                        <div className="meta-item">
                            <span className="label">ISBN</span>
                            <span className="value">{book.isbn}</span>
                        </div>
                    </div>

                    <div className="description">
                        <h3>Descripción</h3>
                        <p>{book.description}</p>
                    </div>

                    <div className="price-section">
                        <span className="price-label">Precio</span>
                        <div className="price">${book.price.toFixed(2)} <span className="currency">USD</span></div>
                    </div>

                    <div className="actions">
                        <button className="btn btn-primary" onClick={handleAddToCart}>
                            <i className="icon-cart">🛒</i> Añadir al carrito
                        </button>
                        <button className="btn btn-secondary"onClick={handleGoToCart}>Ver carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsBook
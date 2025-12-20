import { useNavigate, Link } from 'react-router-dom'
import { BookOpen, ShoppingCart, Search } from 'lucide-react'
import './Navbar.css'

const Navbar = ({ searchQuery, setSearchQuery, cartCount = 0 }) => {
  const navigate = useNavigate()

  const handleSearchChange = (event) => {
    const value = event.target.value
    if (setSearchQuery) {
      setSearchQuery(value)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/catalog')
  }

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          <BookOpen className="navbar__brand-icon" size={28} />
          <div className="navbar__brand-text">
            <span className="navbar__brand-name">Relatos de papel</span>
            <small className="navbar__brand-subtitle">Tienda de libros</small>
          </div>
        </Link>

        <form className="navbar__search" onSubmit={handleSubmit}>
          <div className="navbar__search-wrapper">
            <Search size={18} className="navbar__search-icon" />
            <input
              type="search"
              name="search"
              placeholder="Buscar libros..."
              className="navbar__search-input"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </form>

        <nav className="navbar__links">
          <Link to="/catalog" className="navbar__link">
            Libros
          </Link>
          <Link to="/catalog" className="navbar__link">
            Checkout
          </Link>
          < Link to ="/helpCenter" className="navbar__link">
           Ayuda
          </Link>
          <Link to="/catalog" className="navbar__link navbar__link--cart">
            <ShoppingCart size={20} />
            {cartCount > 0 && <span className="navbar__badge">{cartCount}</span>}
          </Link>
          
        </nav>
      </div>
    </header>
  )
}

export default Navbar

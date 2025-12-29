import { useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar' 
import Footer from '../Footer/Footer'
import CartDrawer from '../CartDrawer/CartDrawer'

const MainLayout = ({ children, searchQuery, setSearchQuery, cartCount, cart, isCartOpen, setIsCartOpen, removeFromCart }) => {
  const location = useLocation()

  const hideNavbarRoutes = ['/', '/login']
  const hideNavbar = hideNavbarRoutes.includes(location.pathname)

  return (
    <div className="app">
      {!hideNavbar && (
        <Navbar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          cartCount={cartCount} 
          onCartClick={() => setIsCartOpen(true)} 
        />
      )}
      
      <main className={`app__content ${hideNavbar ? 'app__content--full' : ''}`}>
        {/* Aquí se renderizarán tus Rutas */}
        {children}
      </main>

      {/* El footer solo sera visible donde aparece el Navbar */}
      {!hideNavbar && <Footer />}

      {/* Carrito Flotante */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        onRemove={removeFromCart}
      />
    </div>
  )
}

export default MainLayout
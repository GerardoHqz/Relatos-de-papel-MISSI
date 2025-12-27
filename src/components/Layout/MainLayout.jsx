import { useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar' 
import Footer from '../Footer/Footer'

const MainLayout = ({ children, searchQuery, setSearchQuery, cartCount }) => {
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
        />
      )}
      
      <main className={`app__content ${hideNavbar ? 'app__content--full' : ''}`}>
        {/* Aquí se renderizarán tus Rutas */}
        {children}
      </main>

      {/* El footer solo sera visible donde aparece el Navbar */}
      {!hideNavbar && <Footer />}
    </div>
  )
}

export default MainLayout
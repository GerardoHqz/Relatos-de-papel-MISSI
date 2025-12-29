import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../components/Layout/MainLayout'
import Landing from '../pages/Landing'
import Login from '../pages/Login'
import Catalog from '../pages/Catalog'
import DetailsBook from '../components/DetailsBook/DetailsBook.jsx' 
import Ayuda  from '../components/HelpCard/seccion_soporte.jsx'
import  TerminosYCondiciones from '../pages/terminosycondiciones.jsx'
export const AppRouter = ({ searchQuery, setSearchQuery, cartCount, addToCart, cart, removeFromCart, isCartOpen, setIsCartOpen }) => {
  return (
    <MainLayout 
      searchQuery={searchQuery} 
      setSearchQuery={setSearchQuery} 
      cartCount={cartCount}
      cart={cart}
      removeFromCart={removeFromCart}
      isCartOpen={isCartOpen}
      setIsCartOpen={setIsCartOpen}
    >
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/helpCenter" element={<Ayuda />} />
        <Route path="/terminos-y-condiciones" element={<TerminosYCondiciones />} />
        
        <Route 
          path="/catalog" 
          element={<Catalog searchQuery={searchQuery} addToCart={addToCart} />} 
        />
        
        <Route 
          path="/book/:id" 
          element={<DetailsBook />} 
        />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  )
}
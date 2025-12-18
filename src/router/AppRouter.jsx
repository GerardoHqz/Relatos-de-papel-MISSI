import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../components/Layout/MainLayout'
import Landing from '../pages/Landing'
import Login from '../pages/Login'
import Catalog from '../pages/Catalog'
import DetailsBook from '../components/DetailsBook/DetailsBook.jsx' 

export const AppRouter = ({ searchQuery, setSearchQuery, cartCount, addToCart }) => {
  return (
    <MainLayout 
      searchQuery={searchQuery} 
      setSearchQuery={setSearchQuery} 
      cartCount={cartCount}
    >
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        
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
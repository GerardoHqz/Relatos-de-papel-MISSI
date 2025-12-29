import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  //const [cartCount, setCartCount] = useState(0)
  const [cart, setCart] = useState([]) // Lista de libros
  const [isCartOpen, setIsCartOpen] = useState(false) // Controla si se ve el carrito

  const addToCart = (book) => {
    //setCartCount((count) => count + 1)
    setCart((prev) => [...prev, book])
    setIsCartOpen(true) // Abre el carrito automáticamente al agregar
  }

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <BrowserRouter>
      <AppRouter 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        cartCount={cart.length}
        addToCart={addToCart}
        cart={cart}
        removeFromCart={removeFromCart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
    </BrowserRouter>
  )

}

export default App
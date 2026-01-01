import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (book) => {
    setCart((prev) => {
      const isBookInCart = prev.find((item) => item.id === book.id);

      if (isBookInCart) {
        return prev.map((item) =>
          item.id === book.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prev, { ...book, quantity: 1 }];
    });
    setIsCartOpen(true);
  }

  const removeFromCart = (bookId) => {
    setCart((prev) => prev.filter((item) => item.id !== bookId));
  }

  const clearCart = () => setCart([])

  const cartCount = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <BrowserRouter>
      <AppRouter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={cartCount}
        addToCart={addToCart}
        cart={cart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
    </BrowserRouter>
  )
}

export default App;
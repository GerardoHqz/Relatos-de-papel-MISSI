import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [cartCount, setCartCount] = useState(0)

  const addToCart = () => {
    setCartCount((count) => count + 1)
  }

  return (
    <BrowserRouter>
      <AppRouter 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        cartCount={cartCount}
        addToCart={addToCart}
      />
    </BrowserRouter>
  )
}

export default App
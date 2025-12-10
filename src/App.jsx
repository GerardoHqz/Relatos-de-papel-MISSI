import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Landing Page</h1>} />
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/book/:id" element={<h1>Detail Book</h1>} />
        <Route path="/checkout" element={<h1>Buy Book</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

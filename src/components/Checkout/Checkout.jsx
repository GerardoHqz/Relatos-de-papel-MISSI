import './Checkout.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Checkout = ({ cart, clearCart }) => {
  const navigate = useNavigate()

  const total = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0)

  const handlePayment = () => {
    alert('✅ El pedido se ha realizado correctamente')
    clearCart()
    navigate('/catalog')
  }

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/catalog')
    }
  }, [cart, navigate])

  return (
    <section className="checkout">
      <h1>Checkout</h1>

      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.title} - Cant: {item.quantity || 1} — $ {(item.price * (item.quantity || 1)).toFixed(2)}
          </li>
        ))}
      </ul>

      <h3>Total: $ {total.toFixed(2)}</h3>

      <button onClick={handlePayment}>
        Confirmar Pago
      </button>
    </section>
  )
}

export default Checkout

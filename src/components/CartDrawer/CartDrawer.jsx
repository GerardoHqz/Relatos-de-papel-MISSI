import './CartDrawer.css'
import { X, ShoppingBag, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const CartDrawer = ({ isOpen, onClose, cart, onRemove }) => {
  const navigate = useNavigate()

  const total = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0)
  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0)

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'is-open' : ''}`} onClick={onClose} />

      <div className={`cart-drawer ${isOpen ? 'is-open' : ''}`}>
        <div className="cart-header">
          <div className="cart-title">
            <ShoppingBag size={20} />
            <span>Tu Pedido ({totalItems})</span>
          </div>
          <button className="close-btn" onClick={onClose}><X size={24} /></button>
        </div>

        <div className="cart-content">
          {cart.length === 0 ? (
            <div className="cart-empty">Tu carrito está vacío</div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="item-info">
                  <h4>{item.title}</h4>
                  <div className="item-qty-price">
                    <p>$ {item.price.toFixed(2)}</p>
                    <span className="qty-badge">x{item.quantity}</span>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => onRemove(item.id)}>
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>$ {total.toFixed(2)}</span>
            </div>
            <button
              className="checkout-btn"
              onClick={() => {
                onClose()
                navigate('/checkout')
              }}
            >
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
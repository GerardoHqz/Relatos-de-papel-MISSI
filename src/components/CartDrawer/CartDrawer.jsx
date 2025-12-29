import './CartDrawer.css'
import { X, ShoppingBag, Trash2 } from 'lucide-react'

const CartDrawer = ({ isOpen, onClose, cart, onRemove }) => {
  const total = cart.reduce((acc, item) => acc + (item.price || 0), 0)

  return (
    <>
      {/* Fondo oscuro detrás del carrito */}
      <div className={`cart-overlay ${isOpen ? 'is-open' : ''}`} onClick={onClose} />
      
      {/* Panel lateral */}
      <div className={`cart-drawer ${isOpen ? 'is-open' : ''}`}>
        <div className="cart-header">
          <div className="cart-title">
            <ShoppingBag size={20} />
            <span>Tu Pedido ({cart.length})</span>
          </div>
          <button className="close-btn" onClick={onClose}><X size={24} /></button>
        </div>

        <div className="cart-content">
          {cart.length === 0 ? (
            <div className="cart-empty">Tu carrito está vacío</div>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="item-info">
                  <h4>{item.title}</h4>
                  <p>S/ {item.price}</p>
                </div>
                <button className="remove-btn" onClick={() => onRemove(index)}>
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
              <span>S/ {total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Finalizar Compra</button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
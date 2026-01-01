import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ArrowLeft, CreditCard } from 'lucide-react';

const CartPage = ({ cart, onRemove }) => {
    const navigate = useNavigate();

    const total = cart.reduce((acc, item) => {
        const price = item.price || 0;
        const qty = item.quantity || 1;
        return acc + (price * qty);
    }, 0);

    return (
        <div className="cart-page container">
            <Link to="/catalog" className="back-link">
                <ArrowLeft size={18} /> Volver a la tienda
            </Link>

            <h1 className="cart-page__title">Tu Carrito de Compras</h1>

            {cart.length === 0 ? (
                <div className="cart-page__empty">
                    <p>Parece que aún no has añadido ningún artículo a tu colección.</p>
                    <Link to="/catalog" className="landing__button">
                        Explorar Catálogo
                    </Link>
                </div>
            ) : (
                <div className="cart-page__content">
                    {/* Lista de Libros */}
                    <div className="cart-page__list">
                        {cart.map((item) => (
                            <div key={item.id} className="cart-page__item">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="cart-page__item-img"
                                />
                                <div className="cart-page__item-details">
                                    <h3>{item.title}</h3>
                                    <p className="author">{item.author}</p>
                                    <div className="cart-page__item-pricing">
                                        <span className="price">$ {item.price.toFixed(2)}</span>
                                        <span className="quantity-info">x{item.quantity || 1}</span>
                                    </div>
                                </div>
                                <button
                                    className="cart-page__remove"
                                    onClick={() => onRemove(item.id)}
                                    title="Eliminar del carrito"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Resumen Lateral */}
                    <div className="cart-page__summary">
                        <h2>Resumen</h2>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>$ {total.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Envío</span>
                            <span style={{ color: '#10b981', fontWeight: 'bold' }}>Gratis</span>
                        </div>
                        <div className="summary-row total">
                            <span>Total</span>
                            <span>$ {total.toFixed(2)}</span>
                        </div>
                        <button
                            className="cart-page__checkout-btn"
                            onClick={() => navigate('/checkout')}
                        >
                            <CreditCard size={18} /> Proceder al Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
import './Footer.css';
import { BookOpen, Instagram, Twitter, Facebook, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Sección de Marca */}
        <div className="footer__section">
          <div className="footer__brand">
            <BookOpen size={24} />
            <span>Relatos de papel</span>
          </div>
          <p className="footer__description">
            Tu librería de confianza, llevando historias a tu puerta desde 2025.
          </p>
          <div className="footer__social">
            <Instagram size={20} />
            <Twitter size={20} />
            <Facebook size={20} />
          </div>
        </div>

        {/* Sección de Enlaces Rápidos */}
        <div className="footer__section">
          <h4 className="footer__title">Explorar</h4>
          <nav className="footer__nav">
            <Link to="/catalog">Catálogo</Link>
            {/*<Link to="/terminosycondiciones">Términos y Condiciones</Link>*/}
            <a href="#">Ayuda y Soporte</a>
          </nav>
        </div>

        {/* Sección de Contacto */}
        <div className="footer__section">
          <h4 className="footer__title">Contacto</h4>
          <ul className="footer__contact">
            <li><Mail size={16} /> contacto@grupo10.com</li>
            <li><MapPin size={16} /> Lima, Perú</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; 2025 Relatos de Papel. Todos los derechos reservados al Grupo 10.</p>
      </div>
    </footer>
  );
};

export default Footer;
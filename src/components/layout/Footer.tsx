import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>EMTRASUR</h4>
            <p>Empresa Municipal de Tránsito y Transporte</p>
            <p>La Estrella, Antioquia</p>
          </div>
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>Email: comunicaciones@emtrasur.com.co</p>
            <p>Teléfono: (604) XXX XXXX</p>
          </div>
          <div className="footer-section">
            <h4>Enlaces</h4>
            <a href="https://emtrasur.com.co" target="_blank" rel="noopener noreferrer">
              Sitio Web Oficial
            </a>
            <a href="https://emtrasur.com.co/pqrs/" target="_blank" rel="noopener noreferrer">
              PQRS
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} EMTRASUR. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from 'react';
import './Header.css';
import logoEmtrasur from '../../assets/images/logo-emtrasur.jpg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src={logoEmtrasur} alt="EMTRASUR Logo" className="logo-image" />
          <div className="header-title">
            <span className="logo-text">EMTRASUR</span>
            <span className="logo-subtitle">La Estrella - Antioquia</span>
          </div>
        </div>
        
        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <a href="https://emtrasur.com.co" target="_blank" rel="noopener noreferrer">
            Sitio Web
          </a>
          <a href="https://emtrasur.com.co/pqrs/" target="_blank" rel="noopener noreferrer">
            PQRS
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

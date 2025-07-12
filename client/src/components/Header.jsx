import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${isMenuOpen ? 'nav-open' : ''}`}>
      <nav className="nav container">
        <a href="#" className="nav__logo">Pi</a>
        
        {/* Desktop Menu */}
        <div className="nav__menu_desktop">
          <ul className="nav__list">
            <li><a href="#about" className="nav__link">About</a></li>
            <li><a href="#projects" className="nav__link">Projects</a></li>
            <li><a href="/Punith.BR_Resume.pdf" className="nav__link" download>Resume</a></li>
            <li><a href="#contact" className="nav__link">Contact</a></li>
          </ul>
        </div>

        {/* Desktop Socials */}
        <div className="nav__socials_desktop">
            <a href="https://github.com/punithbr27" target="_blank" rel="noopener noreferrer" className="nav__social-link"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/punith-br/" target="_blank" rel="noopener noreferrer" className="nav__social-link"><i className="fa-brands fa-linkedin"></i></a>
        </div>
        
        {/* Mobile Hamburger Button */}
        <button className="nav__toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        {/* Mobile Slide-in Menu */}
        <div className="mobile-nav">
             <ul className="mobile-nav__list">
                <li><a href="#about" onClick={closeMenu}>About</a></li>
                <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                <li><a href="/Punith.BR_Resume.pdf" download onClick={closeMenu}>Resume</a></li>
                <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                {/* Socials inside the mobile menu have been removed as requested */}
            </ul>
        </div>

      </nav>
    </header>
  );
};

export default Header;
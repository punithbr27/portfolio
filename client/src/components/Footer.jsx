import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <h4>Quick Links</h4>
          <ul className="footer__links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="Punith.BR_Resume.pdf" download="Punith_BR_Resume.pdf">Resume</a></li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>Connect</h4>
          <div className="footer__socials">
            <a href="https://github.com/punithbr27" target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/punith-br/" target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>Made with the help of AI 🤖</p>
      </div>
    </footer>
  );
};

export default Footer;
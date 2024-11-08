import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">

      <div className="copyright">
        © {new Date().getFullYear()} MyApp. Levani Gamezardashvili.
      </div>
    </footer>
  );
};

export default Footer;

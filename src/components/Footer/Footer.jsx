import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className={'footer'}>
      <span className={'copyright'}>Все права защищены © 2021</span>
      <a className={'contact-email'} href="mailto:mirrukzakov@gmail.com"> &#9993; mirrukzakov@gmail.com</a>
      <a className={'contact-phone'} href="tel:+79781234567">+7 (978) 1234567</a>
    </footer>
  )
}

export default Footer;
import React from 'react';
import './Footer.css';
import Menu from './Menu';

function Footer(props) {
  const menuItems = [
    { text: 'Privacy', url: '/privacy' },
    { text: 'Terms of Service', url: '/terms' },
    { text: 'Support', url: '/support' }
  ];

  return (
    <footer className="footer">
      {props.title}
      <Menu list={menuItems} />
    </footer>
  );
}

export default Footer;

import React from 'react';
import './Header.css';
import Logo from './Logo';
import DateTime from './DateTime';

function Header(props) {
  return (
    <header className="header">
      <Logo imgSrc="path/to/your/logo.png" />
      {props.title}
      <DateTime />
    </header>
  );
}

export default Header;

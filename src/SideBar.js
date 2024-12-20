import React from 'react';
import './SideBar.css';
import Menu from './Menu';

function SideBar(props) {
  const menuItems = [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' },
    { text: 'External Link', url: 'https://example.com' }
  ];

  return (
    <aside className="sidebar">
      {props.title}
      <Menu list={menuItems} />
    </aside>
  );
}

export default SideBar;

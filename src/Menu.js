import React from 'react';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';
import './Menu.css';

function Menu({ items }) {
  return (
    <ul className="menu">
      {items.map((item, index) => (
        <MenuItem key={index} text={item.text} url={item.url} />
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  items: state.menu.items,
});

export default connect(mapStateToProps)(Menu);

import React from 'react';
import { connect } from 'react-redux';
import './Logo.css';

function Logo({ imgSrc }) {
  return (
    <a href="/" className="logo">
      <img src={imgSrc} alt="Logo" />
    </a>
  );
}

const mapStateToProps = (state) => ({
  imgSrc: state.logo.imgSrc,
});

export default connect(mapStateToProps)(Logo);

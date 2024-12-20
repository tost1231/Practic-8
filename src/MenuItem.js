import React from 'react';
import './MenuItem.css';

function MenuItem({ text, url }) {
  const isExternal = url && !url.startsWith(window.location.origin);

  return (
    <li className="menu-item">
      {url ? (
        <a href={url} target={isExternal ? "_blank" : "_self"} rel="noopener noreferrer">
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </li>
  );
}

export default MenuItem;

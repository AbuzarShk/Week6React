// src/components/Header.js
import React from 'react';

function Header({ postCount }) {
  return (
    <header>
      <h1>React Blog</h1>
      <p>Total Posts: {postCount}</p>
    </header>
  );
}

export default Header;

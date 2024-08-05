// src/components/Header.js
import React from 'react';

function Header({ postCount }) {
  return (
    <header className="bg-dark text-white text-center py-4 mb-4">
      <div className="container">
        <h1><b>News Application</b></h1>
        <p>Total Posts: {postCount}</p>
      </div>
    </header>
  );
}

export default Header;

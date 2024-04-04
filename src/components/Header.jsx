// Header.jsx
import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="spacing"></div>
      <h1 className="logo">🏠 Home</h1>
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#about">About Me 🌟</a></li>
          <li><a href="#projects">Projects 💻</a></li>
          <li><a href="#contact">Contact Me 📞</a></li>
        </ul>
      </nav>
    </header>
  );
}

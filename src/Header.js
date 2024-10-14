import React from "react";
import "./Header.css"; // We will define some styles in this file

function Header() {
  return (
    <header className="app-header">
      <div className="logo">
        {/* You can replace the src with your own logo */}
        <img src="https://via.placeholder.com/150" alt="App Logo" />
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

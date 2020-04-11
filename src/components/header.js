import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header>
      <h1>Danno and the Mysterians</h1>
      <nav>
        <ul>
          <Link to="/">Index</Link>
        </ul>
        <ul>
          <Link to="/about">About</Link>
        </ul>
        <ul>
          <Link to="/blog">Blog</Link>
        </ul>
        <ul>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
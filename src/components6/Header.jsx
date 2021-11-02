import React from 'react';
import Link from './Link';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <Link href="/">Unsplash</Link>
      <Link href="/accordion">Accordion</Link>
      <Link href="/wiki">Wiki</Link>
    </div>
  );
};

export default Header;

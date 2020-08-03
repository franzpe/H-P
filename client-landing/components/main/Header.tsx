import React from 'react';

import Nav from './Nav';

const Header = () => {
  return (
    <header className="sticky top-0 h-20 shadow-header bg-white z-20">
      <Nav />
    </header>
  );
};

export default Header;

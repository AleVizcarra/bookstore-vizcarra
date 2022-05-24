import React, { useState } from 'react';

import './navbar.css';

const BurgerButton = ({menuIsOpen, setMenuIsOpen}) => {

  const handleMenuToggle = () => {
    setMenuIsOpen(menuIsOpen => !menuIsOpen);
  };

  return (
    <div 
      className='navbar__burguer-button'
      onClick={handleMenuToggle}
    >
        <div className={(menuIsOpen) ? 'line1-menu-open' : ''}></div>
        <div className={(menuIsOpen) ? 'line2-menu-open' : ''}></div>
        <div className={(menuIsOpen) ? 'line3-menu-open' : ''}></div>
    </div>
  )
}

export default BurgerButton
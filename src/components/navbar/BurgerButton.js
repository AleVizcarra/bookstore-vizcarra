import React, { useState } from 'react';

import './navbar.css';

const BurgerButton = ({setMenuIsOpen}) => {

  const handleMenuToggle = () => {
    setMenuIsOpen(menuIsOpen => !menuIsOpen);
  };

  return (
    <div 
      className='navbar__burguer-button'
      onClick={handleMenuToggle}
    >
        <div className={"line1"}></div>
        <div className={"line2"}></div>
        <div className={"line3"}></div>
    </div>
  )
}

export default BurgerButton
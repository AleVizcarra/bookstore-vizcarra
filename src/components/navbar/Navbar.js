import React from 'react';
import BurgerButton from './BurgerButton';
import CartWidget from './CartWidget';

import './navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar__container'>
            {/* Logo */}
            <div className='navbar__brand'>
                <h1 className='navbar__title'>
                    <a href="#">
                        Plot <span><i className="fa-solid fa-book-open"></i></span> Twist
                        <span className='bookstore'>Bookstore</span>
                    </a>
                </h1>
            </div>

            {/* Menu */}
            <div className='navbar__menu-container'>
                <ul className='navbar__menu'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Tienda</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                {/* Cart Widget */}
                <CartWidget />
                {/* Burger Button for Mobile Menu */}
                <BurgerButton />
            </div>
        </div>    
    </nav>
  )
}

export default Navbar
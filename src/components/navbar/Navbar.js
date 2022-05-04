import { Link, NavLink } from 'react-router-dom';
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
                    <Link to="/">
                        Plot <span><i className="fa-solid fa-book-open"></i></span> Twist
                        <span className='bookstore'>Bookstore</span>
                    </Link>
                </h1>
            </div>

            {/* Menu */}
            <div className='navbar__menu-container'>
                <ul className='navbar__menu'>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Tienda</NavLink></li>
                    <li><NavLink to="/category/populares" className={({ isActive }) => isActive ? 'active-link': ''}>Populares</NavLink></li>
                    <li><NavLink to="/category/novedades" className={({ isActive }) => isActive ? 'active-link': ''}>Novedades</NavLink></li>
                    <li><NavLink to="/category/descuentos" className={({ isActive }) => isActive ? 'active-link': ''}>Descuentos</NavLink></li>
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
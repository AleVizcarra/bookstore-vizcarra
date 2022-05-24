import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react';
import BurgerButton from './BurgerButton';
import CartWidget from './CartWidget';
import { ShoppingCartContext } from '../../context/shoppingCartContext';
import Title from '../ui/Title';

import './navbar.css';
import { MenuControlContext } from '../../context/menuControlContext';


const Navbar = () => {
    
    const {menuIsOpen, setMenuIsOpen} = useContext(MenuControlContext);
    const {cart} = useContext(ShoppingCartContext);

    const handleMobileNav = () => {
        setMenuIsOpen(false);
    };

  return (
    <nav className='navbar'>
        <div className='navbar__container'>
            {/* Logo */}
            <div className='navbar__brand'>
                <Title />
            </div>

            {/* Menu */}
            <div className='navbar__menu-container'>
                <ul className={`navbar__menu ${(menuIsOpen) ? 'navbar__menu-show' : ''}`}>
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => isActive ? 'active-link' : '' }
                            onClick = {handleMobileNav}
                        >
                            Tienda
                        </NavLink>    
                    </li>
                    <li>
                        <NavLink 
                            to="/category/populares" 
                            className={({ isActive }) => isActive ? 'active-link': ''}
                            onClick = {handleMobileNav}
                        >
                            Populares
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/category/novedades" 
                            className={({ isActive }) => isActive ? 'active-link': ''}
                            onClick = {handleMobileNav}
                        >
                            Novedades
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/category/descuentos" 
                            className={({ isActive }) => isActive ? 'active-link': ''}
                            onClick = {handleMobileNav}
                        >
                            Descuentos
                        </NavLink>
                    </li>
                </ul>
                {/* Cart Widget */}
                <CartWidget />
                
                {/* Burger Button for Mobile Menu */}
                <BurgerButton
                    setMenuIsOpen = {setMenuIsOpen}
                />
            </div>
        </div>    
    </nav>
  )
}

export default Navbar
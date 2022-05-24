import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { ShoppingCartContext } from '../../context/shoppingCartContext';


import './cart.css';
import CartItemsList from './CartItemsList';
import CartTotal from './CartTotal';

  const Cart = () => {

  const { cart, cartTotal, setCartTotal } = useContext(ShoppingCartContext);

  const calculateTotal = () => {
    let total = 0;
    let envio;
    
    total = cart.reduce((curr, book) => curr + book.total, 0);
    
    (total > 699) ? (
      envio = 0
    ) : (
      envio = 50
    )

    setCartTotal({
      subtotal: total,
      envio,
      totalFinal: total + envio,
    });

    // Se guardó así porque no me guardaba el cartTotal actualizado =(, me guardaba el anterior
    // localStorage.setItem('cartTotal', JSON.stringify({
    //   subtotal: total,
    //   envio,
    //   totalFinal: total + envio,
    // }));

  };

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  return (
    <div className='cart-container'>
        <h1 className='cart-title'>Tu carrito de compras</h1>

        {
            (cart.length === 0) ? (
                //Mensaje de varrito vacío
                <div className='cart-message-container'>
                  <h3>Tu carrito está vacío</h3>
                  <Link to='/'>Revisa nuestro catálogo</Link>
                </div>
            ) : (
              <div className='items-total-container'>
                <CartItemsList cart={cart} />
                <CartTotal total = {cartTotal}/>
              </div>

            )
        }
    </div>
  )
}

export default Cart
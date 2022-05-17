import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { ShoppingCartContext } from '../../context/shoppingCartContext';


import './cart.css';
import CartItemsList from './CartItemsList';
import CartTotal from './CartTotal';

  const Cart = () => {

  const { cart } = useContext(ShoppingCartContext);

  const initialTotal = localStorage.getItem('cartTotal') ?? 0;

  const [total, setTotal] = useState(initialTotal);

  const calculateTotal = () => {
  let total = 0;

  cart.forEach((book) => {
    (book.item.precioDescuento !== '') ? (
      total = total + (book.item.precioDescuento * book.quantity)
    ) : (
      total = total + (book.item.precio * book.quantity)
    )
  });

    setTotal(total);
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
                <CartTotal total = {total}/>
              </div>

            )
        }
    </div>
  )
}

export default Cart
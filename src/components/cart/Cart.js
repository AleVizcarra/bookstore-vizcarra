import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../context/shoppingCartContext'

import './cart.css';

const Cart = () => {

    const {cart, removeItem, clear} = useContext(ShoppingCartContext);

  return (
    <div className='cart-container'>
        <h1>Prueba Cart</h1>
        <ul>
            {
                cart.map((book) => (
                    <li key={book.id} style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <b>{book.item.titulo} </b>{book.quantity} 
                        <button 
                            onClick={() => removeItem(book.item.id)}
                        >  
                            x 
                        </button>
                    </li>
                ))
            }
        </ul>

        <button onClick={clear}>Vaciar carrito</button>
    </div>
  )
}

export default Cart
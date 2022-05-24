import CartItem from "./CartItem"

import './cart.css';
import { createContext, useEffect, useState } from "react";

const CartItemsList = ({ cart }) => {

  return (
    <div className='cart-items-list'>
        {
            cart.map((book) => (
                <CartItem 
                    key={book.item.id}
                    item = {book}
                />
            ))
        }
    </div>
  )
}

export default CartItemsList
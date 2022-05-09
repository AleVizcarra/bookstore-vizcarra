import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../context/shoppingCartContext';

import './itemCounter.css';

const ItemCounter = ({ item, setIsBookAdded }) => {

    const {cartUpdate} = useContext(ShoppingCartContext);

    const [quantity, setQuantity] = useState(1);

    const {id,stock} = item;

    const handleQuantityChange = (num) => {
        setQuantity(quantity => quantity + num);
    }

    const handleAdd = () => {
        cartUpdate(id, quantity, item);
        setIsBookAdded(true);
        setQuantity(1);
    }

  return (
    <div className='add-book-section'>
        <div className="item-counter">
            <button
                className="decrease-btn"
                onClick={() => handleQuantityChange(-1)}
                disabled= {quantity === 1 && true}
            >
                <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12H18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            <span className="quantity">{ quantity }</span>

            <button
                className="increase-btn"
                onClick={() => handleQuantityChange(1)}
                disabled={quantity === stock && true}
            >
                <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12H12M18 12H12M12 12V6M12 12V18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

        </div>

        <button 
            className='detail-btn add-button-details'
            onClick={ handleAdd }
        >
            Añadir a carrito
            <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6H22L19 16H6L3 6ZM3 6L2.25 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 19.5C11 20.3284 10.3284 21 9.5 21C8.67157 21 8 20.3284 8 19.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 19.5C17 20.3284 16.3284 21 15.5 21C14.6716 21 14 20.3284 14 19.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    </div>
  )
}

export default ItemCounter
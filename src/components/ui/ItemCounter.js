import { useState } from 'react';
import './itemCounter.css';

const ItemCounter = ({ stock }) => {

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (num) => {
        setQuantity(quantity => quantity + num);
    }

  return (
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
  )
}

export default ItemCounter
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/shoppingCartContext';
import { images } from '../../helpers/images';

import './cartItem.css';

const CartItem = ({item}) => {

    const { cart, removeItem, updateItemQuantity } = useContext(ShoppingCartContext);  

    const {
        id,
        imagen,
        titulo,
        autor,
        precio,
        precioDescuento,
        stock
    } = item.item;

    const { quantity } = item;

    const handleDelete = () => {
        removeItem(id);
    };

    const handleItemIncrease = () => {
        (quantity < stock) && updateItemQuantity(id, 1);
    };

    const handleItemDecrease = () => {
        (quantity > 1) && updateItemQuantity(id, -1);
        (quantity === 1) && removeItem(id);
    };
    
  return (
    <div className='cart-item'>
        <div className='cart-item-image'>
            <img src={images(`${ imagen }`)} alt={titulo} />
        </div>

        <div className='cart-item-info'>
            <h4>{titulo}</h4>
            <h6>{autor}</h6>
            <button 
                className='delete-btn'
                onClick={ handleDelete }
            >
                <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 11V20.4C19 20.7314 18.7314 21 18.4 21H5.6C5.26863 21 5 20.7314 5 20.4V11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 17V11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 17V11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 7L16 7M3 7L8 7M8 7V3.6C8 3.26863 8.26863 3 8.6 3L15.4 3C15.7314 3 16 3.26863 16 3.6V7M8 7L16 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>

        <div className="cart-item-quatity-price">
            <div className='cart-item-quantity'>
                <button 
                    className='cart-item-btn'
                    onClick={ handleItemDecrease }
                >
                    <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12H18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <p>{quantity}</p>
                <button 
                    className='cart-item-btn'
                    onClick={ handleItemIncrease }
                >
                    <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12H12M18 12H12M12 12V6M12 12V18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>

            <div className='cart-item-price'>
                <p>
                    $
                    {
                        (precioDescuento === '') ? (
                            precio * quantity
                        ) : (
                            precioDescuento * quantity
                        )
                    }
                </p>
            </div>
        </div>
    </div>
  )
}

export default CartItem
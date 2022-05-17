import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../context/shoppingCartContext';
import { images } from '../../helpers/images';
import './items.css';

const Item = ({item}) => {

  const {cartUpdate} = useContext(ShoppingCartContext);

  const {
    id, 
    imagen,
    titulo,
    autor,
    precio,
    precioDescuento,

  } = item;

  const navigate = useNavigate();
  const quantity = 1;

  const handleItemDetail = () => {
    navigate(`/item/${id}`);
  }

  const handleAdd = () => {
    cartUpdate(id, quantity, item);
  }

  return (
    <div className='card animate__animated animate__fadeIn'>
        <div className='card__img-container'>
            <img className='card__img' src={images(`${ imagen }`)} alt={titulo} />

            <button 
              className='add-button'
              onClick={handleAdd}
            >
            <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H22L19 16H6L3 6ZM3 6L2.25 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.99219 11H11.9922M13.9922 11H11.9922M11.9922 11V9M11.9922 11V13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 19.5C11 20.3284 10.3284 21 9.5 21C8.67157 21 8 20.3284 8 19.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 19.5C17 20.3284 16.3284 21 15.5 21C14.6716 21 14 20.3284 14 19.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            </button>
        </div>

        <div className='card__body'>
          
          <div className='book-info'>
            <h3 className='book-title'>{titulo}</h3>
            <p className='book-author'>{autor}</p>
          </div>
            

          <div className='price-arrow-container'>
            <div className='card__prices-container'>
              { (precioDescuento !== '') && <p className='previous-book-price'>${precio}</p> }
              <p className='book-price'>
                ${ (precioDescuento !== '') ? precioDescuento : precio }
              </p>
            </div>
            <button 
              className='arrow-button'
              onClick={handleItemDetail}
            >
              <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
            
        </div>
    </div>
  )
}

export default Item
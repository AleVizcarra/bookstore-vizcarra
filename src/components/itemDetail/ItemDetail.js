import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { images } from '../../helpers/images';
import ItemCounter from '../ui/ItemCounter';
import { goToCart } from '../../helpers/viajarACarrito';

import './itemDetail.css';
import '../ui/itemCounter.css';


const ItemDetail = ({ bookDetails }) => {

  const [isBookAdded, setIsBookAdded] = useState(false);

  const navigate = useNavigate();

  const {
    imagen,
    titulo,
    autor,
    genero,
    stock,
    precio,
    precioDescuento,
    sinopsis,
  } = bookDetails;

  return (
    <>
      <div className='book-title-container'>
          <h2 className='book-title-details'>{titulo}</h2>
      </div>

      <div>
        <div className='book-details'>
          <div className='book-img-container-details'>
            <img src={images(`${ imagen }`)} alt={titulo} />
          </div>
          <div className='book-info-container'>
            <div className="author-genre">
              <div className='info-subcontainer'>
                <h3 className='book-info-subtitle'>Autor</h3>
                <p className='book-info-text'>{autor}</p>
              </div>
              <div className='info-subcontainer'>
                <h3 className='book-info-subtitle'>Género</h3>
                <p className='book-info-text'>{genero}</p>
              </div>
            </div>
            <div className='info-subcontainer'>
              <h3 className='book-info-subtitle'>Sinopsis</h3>
              <p className='book-info-text'>{sinopsis}</p>
              {
                (stock === 0) && <p className='out-of-stock-message item-detail-oosm'>AGOTADO</p>
              }
            </div>
            <div className='prices-container'>
              {
                (precioDescuento !== '') ? (
                  <>
                    <p className='previous-book-price-details'>${precio}</p>
                    <p className='current-price-details'>${precioDescuento}</p>
                  </>
                ) : (
                  <p className='current-price-details'>${precio}</p>
                )
              }
            </div>
              {
                (isBookAdded) ? (
                  <button
                    className='detail-btn terminar-comprar-btn'
                    onClick={() => goToCart(navigate)}
                  >
                    Terminar mi compra
                  </button>
                ) : (
                  <ItemCounter
                    item={bookDetails}
                    setIsBookAdded = {setIsBookAdded}
                  />
                )
              }
          </div>
        </div>
      </div>
    
    </>
    
  )
}

export default ItemDetail
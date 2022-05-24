import { images } from '../../helpers/images';

import './resumenCompra.css';

const ResumenItem = ({book}) => {

    const {
        imagen,
        titulo,
    } = book.item;

    const {quantity, total} = book;

  return (
    <div className="resumen-item">
        <img src={images(`${ imagen }`)} alt={titulo} />
        <div className='resumen-item-info'>
            <div className='resumen-item-book'>
                <h4 className='resumen-item-title'>{titulo}</h4>
                <p className='resumen-item-quantity'>Cantidad: {quantity}</p>
            </div>
            <p className='resumen-item-total'>${total}</p>
        </div>
    </div>
  )
}

export default ResumenItem
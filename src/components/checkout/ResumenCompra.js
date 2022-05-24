import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/shoppingCartContext';
import ResumenItemsList from './ResumenItemsList';

import './resumenCompra.css';

const ResumenCompra = () => {

    const { cartTotal:{totalFinal} } = useContext(ShoppingCartContext);

    
  return (
    <section className="resumen-compra-container">
        <h2 className='resumen-compra-title'>Resumen compra</h2>
        <div className='resumen-compra-items-container'>
            <ResumenItemsList />
        </div>

        <div className='resumen-compra-total-final'>
            <p>Total: <span>con envío</span></p>
            <p>${totalFinal}</p>
        </div>
    </section>
  )
}

export default ResumenCompra
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/shoppingCartContext';
import ResumenItem from './ResumenItem';

import './resumenCompra.css';

const ResumenItemsList = () => {

    const { cart } = useContext(ShoppingCartContext);

    return (
        <div>
            {
                cart.map((book) => (
                    <ResumenItem
                        key={book.item.id}
                        book = {book}
                    />
                ))
            }
        </div>
    )
}

export default ResumenItemsList
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/shoppingCartContext';
import './cart.css';

const CartTotal = ({ total }) => {

    const { clear } = useContext(ShoppingCartContext);

  return (
    <div className="cart-total-container">
        <div className='precio-envio'>
            <div>
                <p>Subtotal:</p>
                <p>${total}</p>
            </div>

            <div>
                <p>Envío:</p>
                <p>
                    {
                        (total > 699) ? (
                            'Gratis'
                        ) : (
                            `$${150}`
                        )
                    }
                </p>
            </div>
        </div>

        <div className='cart-total'>
            <h3>TOTAL:</h3>
            <h3>$
                {
                    (total > 699) ? (
                        `${total}`
                    ) : (
                        `${total + 150}`
                    )
                }
            </h3>
        </div>
        <button onClick={clear}>Vaciar carrito</button>
        <button>Tramitar Pedido</button>
    </div>
  )
}

export default CartTotal
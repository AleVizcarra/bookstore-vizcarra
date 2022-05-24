import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../context/shoppingCartContext';
import './cart.css';

const CartTotal = ({ total }) => {

    const { clear } = useContext(ShoppingCartContext);

    const {subtotal, envio, totalFinal} = total;

    const navigate = useNavigate();

    const handleOrderCheckout = () => {
        navigate('/order-checkout');
    }

  return (
    <div className="cart-total-container">
        <div className='precio-envio'>
            <div>
                <p>Subtotal:</p>
                <p>${subtotal}</p>
            </div>

            <div>
                <p>Envío:</p>
                <p>
                    {
                        (envio === 0) ? (
                            'Gratis'
                        ) : (
                            `$${envio}`
                        )
                    }
                </p>
            </div>
        </div>

        <div className='cart-total'>
            <h3>TOTAL:</h3>
            <h3>${totalFinal}
            </h3>
        </div>
        <button onClick={clear}>Vaciar carrito</button>

        <button onClick={handleOrderCheckout}>Tramitar Pedido</button>
    </div>
  )
}

export default CartTotal
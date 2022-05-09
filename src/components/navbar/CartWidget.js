import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/shoppingCartContext";
import { images } from "../../helpers/images";
import { goToCart } from "../../helpers/viajarACarrito";

const CartWidget = () => {

  const {cart} = useContext(ShoppingCartContext);

  const navigate = useNavigate();

  const itemsQuantity = cart.reduce((current, book) => current + book.quantity, 0);

  return (
    <div 
      className="navbar__cart-widget"
      onClick={() => goToCart(navigate)}
    >
        <div className="cart-icon">
            <img src={ images('./simple-cart.svg') } alt="Ícono carrito de compras" />
        </div>
        <div className="navbar__contador-carrito">
            <span>{ itemsQuantity }</span>
        </div>
    </div>
  )
}

export default CartWidget
import { images } from "../../helpers/images"

const CartWidget = () => {
  return (
    <div className="navbar__cart-widget">
        <div className="cart-icon">
            <img src={ images('./simple-cart.svg') } alt="Ícono carrito de compras" />
        </div>
        <div className="navbar__contador-carrito">
            <span>0</span>
        </div>
    </div>
  )
}

export default CartWidget
import FormularioCompra from '../components/checkout/FormularioCompra';
import ResumenCompra from '../components/checkout/ResumenCompra';

import './styles/checkout.css';

const Checkout = () => {
  return (
    <section className='checkout-section'>
        <FormularioCompra />
        <ResumenCompra />
    </section>
  )
}

export default Checkout
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../context/shoppingCartContext';
import { addOrderToFirestore, updateStock } from '../../firebase';
import { useForm } from '../../hooks/useForm';

import './formularioCompra.css';

const FormularioCompra = () => {

    const navigate = useNavigate();

    const { cart, setCart, cartTotal, setCartTotal } = useContext(ShoppingCartContext);

    const orderItems = cart.map((book) => {
        return {
            id: book.item.id,
            title: book.item.titulo,
            quantity: book.quantity,
            precioTotal: book.total,
        }
    });
    
    const {totalFinal} = cartTotal;

    const [inputValues, setInputValues, handleInputChange, reset] = useForm({
        name: '',
        phone:'',
        email: '',
        emailConfirmation: ''
    });

    const {name, phone, email, emailConfirmation} = inputValues;

    const [emailConfirm, setEmailConfirm] = useState(true);

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(email !== emailConfirmation) {
            setEmailConfirm(false);
            setInputValues({
                ...inputValues,
                emailConfirmation: '',
            });
            return 
        }

        const today = new Date();
        const day = today.getDate().toString().padStart(2, '0');
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const year = today.getFullYear();
        const orderDate = `${day}/${month}/${year}`;

        const newOrder = {
            buyer: {
                name,
                phone,
                email
            },
            items: orderItems,
            date: orderDate,
            total: totalFinal,
        };

        const orderId = await addOrderToFirestore(newOrder);
        Swal.fire({
            icon: 'success',
            title: '¡Gracias por tu compra!',
            html: `Confimación de pedido: <b>${orderId}</b>`,
            showConfirmButton: true,
            color: '#000',
        }).then(() => {
            navigate('/', { replace: true });
        });

        await updateBooksStock();

        reset();
        resetCart();
    }

    const changeEmailConfirm = () => {
        setEmailConfirm(true);
    }

    const resetCart = () => {
        setCart([]);
        setCartTotal({
            subtotal: 0,
            envio: 0,
            totalFinal: 0,
        });
    }

    const updateBooksStock = async() => {
        cart.forEach((book) => {
            updateStock(book);
        });
    };

    const handleTelInput = (e) => {
        const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', null];
        (numbers.includes(e.nativeEvent.data)) && handleInputChange(e);
    }

  return (
    <div className='checkout-form-container'>
        <h2 className='checkout-form-title'>Datos de Compra</h2>

        <form 
            className='checkout-form'
            onSubmit={handleSubmit}
        >
            <div className='input-container'>
                <input
                    type="text"
                    placeholder='Nombre completo'
                    name='name'
                    autoComplete='off'
                    value={name}
                    onChange = {handleInputChange}
                    required
                />
                <svg className='input-icon' width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            <div className='input-container'>
                <input 
                    type="tel"
                    placeholder='Teléfono (solo números): 6699471234' 
                    name="phone"
                    value={phone}
                    onChange = {handleTelInput}
                    pattern="[0-9]{10}"
                    minLength={10}
                    maxLength={10}
                    required 
                />
                <svg className='input-icon' width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.1182 14.702L14 15.5C11.2183 14.1038 9.5 12.5 8.5 10L9.26995 5.8699L7.81452 2L4.0636 2C2.93605 2 2.04814 2.93178 2.21654 4.04668C2.63695 6.83 3.87653 11.8765 7.5 15.5C11.3052 19.3052 16.7857 20.9564 19.802 21.6127C20.9668 21.8662 22 20.9575 22 19.7655L22 16.1812L18.1182 14.702Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            <div className='input-container'>
                <input 
                    type="email" 
                    placeholder='Dirección de email'
                    name="email"
                    value={email}
                    onChange = {handleInputChange}
                    required
                />
                <svg className='input-icon' width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 9L12 12.5L17 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
            </div>

            {
                (email !== '') && (
                <div>
                    <div className='input-container'>
                        <input
                            className={(!emailConfirm) ? 'error-email' : ''}
                            type="email"
                            placeholder='Confirma tu dirección de email'
                            name="emailConfirmation"
                            value={emailConfirmation}
                            onChange = {handleInputChange}
                            required
                            onFocus={changeEmailConfirm}
                        />
                        <svg className='input-icon' width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 9L12 12.5L17 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                    </div>
                    {
                        (!emailConfirm) && (
                            <p className='message-error-email'>
                                <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 7L12 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 17.01L12.01 16.9989" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Email no coincide con el proporcionado anteriormente
                            </p>
                        )
                    }
                </div>
                )
            }

            <button 
                type="submit"
                disabled = {(emailConfirmation.length !== 0) ? false : true}
            >
                Realizar compra
            </button>
        </form>
    </div>
  )
}

export default FormularioCompra
import { useEffect, useState } from "react"
import Swal from 'sweetalert2';
import { ShoppingCartContext } from "../../context/shoppingCartContext";
import '../../App.css';

const CartContext = ({ children }) => {

    const initialState = JSON.parse(localStorage.getItem('bookstoreCart')) ?? [];

    const [cart, setCart] = useState(initialState);

    useEffect(() => {
        localStorage.setItem('bookstoreCart', JSON.stringify(cart));
    }, [cart]);

    // MÉTODOS

    // Checar si el libro  ya está en carrito
    const isInCart = (id) => {
        return (cart.some((book) => book.item.id === id));
    }

    // Agregar libro
    const addItem = (item, quantity) => {
        const addedBook = {item, quantity}
        setCart(cart => [...cart, addedBook]);
    };

    // Modificar la cantidad de un libro ya en carrito
    const updateItemQuantity = (id, quantity) => {
        const updatedCart = cart.map((book) => 
            (book.item.id === id) ? (
                {
                    ...book,
                    quantity: book.quantity + quantity,
                }
            ) : (
                book
            )
        );

        setCart(updatedCart);
    };

    /* Función que evalúa si un libro está en carrito  
        - Si NO está -> Lo agrega
        - Si SÍ está -> Modifica la cantidad de ese libro agregado
    */
    const cartUpdate = (id, quantity, item) => {
        const isBookInCart = isInCart(id);

        (isBookInCart) ? (
            Swal.fire({
                icon: 'warning',
                title: 'Libro ya agregado',
                text: `¿Desea agregar ${quantity} más al carrito ?`,
                showConfirmButton: true,
                confirmButtonText: 'Sí',
                showDenyButton: true,
                denyButtonText: 'No',
                denyButtonColor: '#bbb8e3',
                color: '#000'
            }).then ((respuesta) => {
                if(respuesta.isConfirmed) {
                    updateItemQuantity(id, quantity);
                    
                    Swal.fire({
                        icon: 'success',
                        title: 'Libro agregado al carrito',
                        timer: 2000,
                        showConfirmButton: false,
                        color: '#000',
                      });
                };
            })
        ) : (
            addItem(item, quantity)
        )
    }

    // Eliminar 1 libro del carrito
    const removeItem = (id) => {
        setCart( cart => {
            return cart.filter((book) => book.item.id !== id);
        });
    };

    // Vaciar carrito
    const clear = () => {
        setCart([]);
    }

    const context = {
        cart,
        cartUpdate,
        removeItem,
        clear,
        updateItemQuantity
    }

  return (
    <ShoppingCartContext.Provider value={ context }>
        {children}
    </ShoppingCartContext.Provider>
  )
}

export default CartContext
import { createContext } from "react";

export const ShoppingCartContext = createContext({
    cart: [],
    cartUpdate: () => {},
    removeItem: () => {},
    clear: () => {},
});
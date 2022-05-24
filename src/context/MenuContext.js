import { useState } from "react";
import { MenuControlContext } from "./menuControlContext";

const MenuContext = ({children}) => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <MenuControlContext.Provider value={{
        menuIsOpen,
        setMenuIsOpen
    }}>
        {children}
    </MenuControlContext.Provider>
  )
}

export default MenuContext
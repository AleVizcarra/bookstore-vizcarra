import { useContext } from 'react';
import '../../App.css';
import { MenuControlContext } from '../../context/menuControlContext';

const Overlay = ({children}) => {

    const {menuIsOpen} = useContext(MenuControlContext);

  return (
    <div className={(menuIsOpen) ? 'overlay' : ''}>
        {children}
    </div>
  )
}

export default Overlay;



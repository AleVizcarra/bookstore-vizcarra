import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import Footer from './components/ui/Footer';
import CartContext from './components/cart/CartContext';
import Cart from './components/cart/Cart';
import Checkout from './pages/Checkout';
import Page404 from './pages/Page404';

import './App.css';
import MenuContext from './context/MenuContext';
import Overlay from './components/ui/Overlay';

function App() {

  return (
    <MenuContext>
      <Overlay>
        <CartContext>
          <BrowserRouter>
            <Navbar />
            <main className='main'>
                <Routes>
                  <Route path='/' element={<ItemListContainer />}/>
                  <Route path='/category/:categoryId' element={<ItemListContainer />}/>
                  <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/order-checkout' element={<Checkout />} />
                  <Route path='*' element={<Page404 />} />
                </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </CartContext>
      </Overlay>
    </MenuContext>
    
  );
}

export default App;

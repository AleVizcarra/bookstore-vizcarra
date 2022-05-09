import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import Footer from './components/ui/Footer';
import CartContext from './components/cart/CartContext';
import Cart from './components/cart/Cart';
import Page404 from './pages/Page404';

import './App.css';

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <Navbar />

        <main className='main'>
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </CartContext>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import Footer from './components/ui/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className='main'>
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

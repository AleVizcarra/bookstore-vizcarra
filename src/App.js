import './App.css';
import ItemListContainer from './components/container/ItemListContainer';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <ItemListContainer greeting= 'Bienvenido a Plot Twist Bookstore!'/>
    </>
  );
}

export default App;

import './App.css';
import ItemListContainer from './components/container/ItemListContainer';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <main className='main'>
        <ItemListContainer />
      </main>
    </>
  );
}

export default App;

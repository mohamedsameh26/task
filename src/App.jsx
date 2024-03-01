import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';
import Cart from './components/cart/Cart';

import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />  
      <Routes>
        <Route path='/' element={<Slider />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

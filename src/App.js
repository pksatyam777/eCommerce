
import './App.css';
import Header from './Components/Header.jsx'
import Home from './Components/Home';
import Cart from './Components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App=()=>{
  return(
    <div><BrowserRouter><Header />
    <Routes>
      <Route path="/" element={<></>} exact/>
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes></BrowserRouter></div>
  );
}
export default App;

import React from 'react'
import Home from "./pages/Home";
import Register from './components/Register';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Categories from './components/Categories';
import MenJackets from './components/MenJackets';
import MenJacketsPage from './pages/MenJacketsPage';
import MenShirts from './components/MenShirts';
import MenTshirts from './components/MenTshirts';
import NavbarTwo from './components/NavbarTwo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart2 from './components/Cart2';
import AddToCart from './components/AddToCart';
import { useState, createContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';


let nextd = 0;
let testing = "testing";

const AddInCartContext = createContext();
const App = () => {
   //const [cartArr, setCartArr] = useState([]) 
   const [cartArr, setCartArr] = useState([])  
   const AddInCart = (item) => {
    
    //  const add = (item) => {
       
    //  }
   }
   <AddInCartContext.Provider>
      
   </AddInCartContext.Provider>
   return (
    <div>
      {console.log(cartArr)}
    
      <Router>
        
        
        
      <NavbarTwo />
      {/* <Slider/> */}
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path = "/MenJacketsPage" element = {<MenJacketsPage cartArr={cartArr} setCartArr={setCartArr} testing =  {testing}/>} />
        <Route path = "/MenShirts" element = {<MenShirts />} />
        <Route path = "/MenTshirts" element = {<MenTshirts  />} />
        <Route path='/Cart2' element = {<AddToCart cartArr = {cartArr}/>} />

        </Routes>
        <Footer/>
      </Router>
      
        
    </div>
  )
}

export default App

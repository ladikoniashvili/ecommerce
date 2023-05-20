import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductDetail from './Components/productDetails';
import Basket from './Components/basket';
import Checkout from './Components/checkout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<App />} />
      <Route path='basket' element ={<Basket/>}></Route>
      <Route path='checkout' element ={<Checkout/>}></Route>
      <Route path='products/:productId' element = {<ProductDetail/>}></Route>
    </Routes>
   
    </BrowserRouter>
   
  </React.StrictMode>
);



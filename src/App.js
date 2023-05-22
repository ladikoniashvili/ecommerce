
import './App.css';
import { useEffect, useState } from 'react';
import { getCategories, } from './fetcher';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductDetail from './Components/productDetails';
import Basket from './Components/basket';
import Checkout from './Components/checkout'; 
import Layout from './Components/layout';
import Category from './Components/Category';


function App() {
  const [categories,setCategories] = useState({errorMessage : '' , data : []});
  

  useEffect(() => { 
   const fetchData = async () =>{
    const responseObject = await getCategories();
    setCategories(responseObject)
   }
   fetchData();
}, [])

 return (
  <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Layout
                                categories={categories}
                            />
                        }
                    >
                        
                        <Route path="basket" element={<Basket />} />
                        <Route path="checkout" element={<Checkout />} />
                        
                        
                        <Route
                            path="categories/:categoryId"
                            element={<Category />}
                        />
                        <Route
                            path="products/:productId"
                            element={<ProductDetail />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
 )
 
  
};

export default App;

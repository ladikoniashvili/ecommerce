
import './App.css';
import { useEffect, useState } from 'react';
import Category from './Components/Category';
import { getCategories,getProducts } from './fetcher';
import CategoryProduct from './Components/categoryProduct';

function App() {
  const [categories,setCategories] = useState({errorMessage : '' , data : []});
  const[products,setProducts] = useState({errorMessage : '' , data : []});
  useEffect(() => { 
   const fetchData = async () =>{
    const responseObject = await getCategories();
    setCategories(responseObject)
   }
   fetchData();
}, [])
const handleCategoryClick = id => {
  const fetchData = async () =>{
    const responseObject = await getProducts(id);
    setProducts(responseObject)
   }
   fetchData();
}

 const renderCategories = () => {
  return categories.data.map(c =>
    <Category key = {c.id}  id = {c.id} title = {c.title} onCategoryClick = { () => handleCategoryClick(c.id)}/>
  );
 }
 const renderProducts = () => {
    return products.data.map(p =>
     <CategoryProduct {...p}>{p.title}</CategoryProduct>
    )
 }
 return (
  <>
  <header>Store</header>

  <section>
    <nav>
      {categories.errorMessage && <div>Error : {categories.errorMessage}</div>}
      {
        categories.data && renderCategories() 
      }
    </nav>
    <article>
      <h1>
    {products.errorMessage && <div>Error : {products.errorMessage}</div>}
      {
       products.data && renderProducts()
      }
      </h1>
      </article>
  </section>
   <footer>
    footer
   </footer>
 </>
 )
 
  
}

export default App;

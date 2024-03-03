import React,{useState,useEffect} from 'react';
import Menu from '../menu/Menu';
import './App.css';
import Products from '../Products/Products';

function App() {
  const [menu,setMenu]=useState([]);
  const [products,setproducts]=useState([]);
  const fetcMenu =async ()=>{
    let data = await fetch("http://localhost:3001/Menu");
    let res = await data.json();
    setMenu(res);
  }
  const fetchProducts = async ()=>{
    let data = await fetch("http://localhost:3001/products");
    let res = await data.json();
    setproducts(res);
  }
  useEffect(()=>{
    fetcMenu();
    fetchProducts();
  },[])
  return (
    <div className="App">
      {/* menu */}
         <Menu menu={menu}/>
      {/* menu */}


      {/* products */}
      <Products products={products}/>
      {/* products */}

    </div>
  );
}

export default App;

import './App.css'
import Home from './components/Home'
import Cart from './components/Cart'
import Products from  './components/Products'
import { Route, Routes } from "react-router-dom"
import { useState } from 'react'
import Detailed from './components/Detailed'


function App() {

  const [allData, setAllData] = useState([{
    src: "/extra1.jpg",
    name: "Tillamook Extra Sharp",
    price: "$12.99",
    type: "extra",
    index: 0,
  },
  {
    src: "/extra2.jpg",
    name: "Lucerne Extra Sharp",
    price: "$10.99",
    type: "extra",
    index: 1,
  },
  {
    src: "/extra3.jpg",
    name: "HEB Natural Extra Sharp",
    price: "$8.99",
    type: "extra",
    index: 2,

  },
  {
    src: "/extra4.png",
    name: "Cuba Cheese Shoppe Extra Sharp",
    price: "$11.99",
    type: "extra",
    index: 3,

  },
  {
    src: "/extra5.png",
    name: "Cabot Vermont Extra Sharp",
    price: "$12.99",
    type: "extra",
    index: 4,

  },
  {
    src: "/medium1.png",
    name: "Tillamook Yellow Medium",
    price: "$11.99",
    type: "medium",
    index: 5,

  },
  {
    src: "/medium2.jpg",
    name: "O Organics White Medium",
    price: "$9.99",
    type: "medium",
    index: 6,

  },
  {
    src: "/medium3.jpg",
    name: "Great Value Yellow Medium",
    price: "$6.99",
    type: "medium",
    index: 7,

  },
  {
    src: "/medium4.jpg",
    name: "Kraft Yellow Medium",
    price: "$9.99",
    type: "medium",
    index: 8,

  },
  {
    src: "/mild1.jpg",
    name: "Cabot Classic Vermont Mild",
    price: "$9.99",
    type: "mild",
    index: 9,

  },
  {
    src: "/mild2.jpg",
    name: "Kerrygold Classic Aged Mild",
    price: "$12.99",
    type: "mild",
    index: 10,

  },
  {
    src: "/mild3.jpg",
    name: "Cabot White Oak Mild",
    price: "$9.99",
    type: "mild",
    index: 11,

  },
  {
    src: "/mild4.png",
    name: "Bucky Bagder's Mild",
    price: "$8.99",
    type: "mild",
    index: 12,

  },
  {
    src: "/sharp1.jpg",
    name: "Dairy Farms Sharp",
    price: "$9.99",
    type: "sharp",
    index: 13,

  },
  {
    src: "/sharp2.jpg",
    name: "Tillamook Yellow Sharp",
    price: "$12.99",
    type: "sharp",
    index: 14,

  },
  {
    src: "/sharp3.jpg",
    name: "Lucern White Sharp",
    price: "$9.99",
    type: "sharp",
    index: 15,

  },
  {
    src: "/sharp4.png",
    name: "Meijer Yellow Sharp",
    price: "$9.99",
    type: "sharp",
    index: 16,

  },
]);

let temp = [];

const [inCart, setInCart] = useState(temp);

const cartAdd = (item) => {
  setInCart(inCart.concat(item));
}

const cartItemEdit = (index, count) => {
  inCart[index].count = count;
  setInCart(inCart);
}

const cartClear = () => {
  setInCart([]);
}

  return (
    <Routes>
      <Route path="/" element={<Home place={'home'}/>} ></Route>
      <Route path="/home" element={<Home place={'home'} data={allData}/>} >
        <Route path="cart" element={<Cart CD={inCart} edit={cartItemEdit} clear={cartClear}/>}/>

      </Route>
      <Route path="/all" element={<Products place={'all'} data={allData} addCart={cartAdd}/>} >
        <Route path="cart" element={<Cart CD={inCart} edit={cartItemEdit} clear={cartClear}/>}/>
        <Route path=":id" element={<Detailed/>}/>

      </Route>
      <Route path="/extra" element={<Products place={'extra'} data={allData} addCart={cartAdd}/>} >
        <Route path="cart" element={<Cart CD={inCart} edit={cartItemEdit} clear={cartClear}/>}/>
        <Route path=":id" element={<Detailed/>}/>

      </Route>
      <Route path="/sharp" element={<Products place={'sharp'} data={allData} addCart={cartAdd}/>} >
        <Route path="cart" element={<Cart CD={inCart} edit={cartItemEdit} clear={cartClear}/>}/> 
        <Route path=":id" element={<Detailed/>}/>

      </Route>
      <Route path="/medium" element={<Products place={'medium'} data={allData} addCart={cartAdd}/>} >
        <Route path="cart" element={<Cart CD={inCart} edit={cartItemEdit} clear={cartClear}/>}/>
        <Route path=":id" element={<Detailed/>}/>

      </Route>
      <Route path="/mild" element={<Products place={'mild'} data={allData} addCart={cartAdd}/>} >
        <Route path="cart" element={<Cart CD={inCart} edit={cartItemEdit} clear={cartClear}/>}/>
        <Route path=":id" element={<Detailed/>}/>

      </Route>
    </Routes>
  )
}

export default App

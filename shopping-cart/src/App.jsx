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
    price: "$12.99"
  },
  {
    src: "/extra2.jpg",
    name: "Lucerne Extra Sharp",
    price: "$10.99"
  },
  {
    src: "/extra3.jpg",
    name: "HEB Natural Extra Sharp",
    price: "$8.99"
  },
  {
    src: "/extra4.png",
    name: "Cuba Cheese Shoppe Extra Sharp",
    price: "$11.99"
  },
  {
    src: "/extra5.png",
    name: "Cabot Vermont Extra Sharp",
    price: "$12.99"
  },
  {
    src: "/medium1.png",
    name: "Tillamook Yellow Medium",
    price: "$11.99"
  },
  {
    src: "/medium2.jpg",
    name: "O Organics White Medium",
    price: "$9.99"
  },
  {
    src: "/medium3.jpg",
    name: "Great Value Yellow Medium",
    price: "$6.99"
  },
  {
    src: "/medium4.jpg",
    name: "Kraft Yellow Medium",
    price: "$9.99"
  },
  {
    src: "/mild1.jpg",
    name: "Cabot Classic Vermont Mild",
    price: "$9.99"
  },
  {
    src: "/mild2.jpg",
    name: "Kerrygold Classic Aged Mild",
    price: "$12.99"
  },
  {
    src: "/mild3.jpg",
    name: "Cabot White Oak Mild",
    price: "$9.99"
  },
  {
    src: "/mild4.png",
    name: "Bucky Bagder's Mild",
    price: "$8.99"
  },
  {
    src: "/sharp1.jpg",
    name: "Dairy Farms Sharp",
    price: "$9.99"
  },
  {
    src: "/sharp2.jpg",
    name: "Tillamook Yellow Sharp",
    price: "$12.99"
  },
  {
    src: "/sharp3.jpg",
    name: "Lucern White Sharp",
    price: "$9.99"
  },
  {
    src: "/sharp4.jpg",
    name: "Meijer Yellow Sharp",
    price: "$9.99"
  },
]);

  return (
    <Routes>
      <Route path="/" element={<Home place={'home'}/>} ></Route>
      <Route path="/home" element={<Home place={'home'} data={allData}/>} >
        <Route path="/cart" element={<Cart/>}/>

      </Route>
      <Route path="/all" element={<Products place={'all'} data={allData}/>} >
        <Route path="/cart" element={<Cart/>}/>
        <Route path=":id"> element={<Detailed/>}</Route>

      </Route>
      <Route path="/extra" element={<Products place={'extra'} data={allData}/>} >
        <Route path="/cart" element={<Cart/>}/>
        <Route path=":id"> element={<Detailed/>}</Route>

      </Route>
      <Route path="/sharp" element={<Products place={'sharp'} data={allData}/>} >
        <Route path="/cart" element={<Cart/>}/> 
        <Route path=":id"> element={<Detailed/>}</Route>

      </Route>
      <Route path="/medium" element={<Products place={'medium'} data={allData}/>} >
        <Route path="/cart" element={<Cart/>}/>
        <Route path=":id"> element={<Detailed/>}</Route>

      </Route>
      <Route path="/mild" element={<Products place={'mild'} data={allData}/>} >
        <Route path="/cart" element={<Cart/>}/>
        <Route path=":id"> element={<Detailed/>}</Route>

      </Route>
    </Routes>
  )
}

export default App

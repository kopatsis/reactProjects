import './App.css'
import Home from './components/Home'
import Cart from './components/Cart'
import Products from  './components/Products'
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home place={'home'}/>} ></Route>
      <Route path="/home" element={<Home place={'home'}/>} ></Route>
      <Route path="/all" element={<Products place={'all'}/>} ></Route>
      <Route path="/extra" element={<Products place={'extra'}/>} ></Route>
      <Route path="/sharp" element={<Products place={'sharp'}/>} ></Route>
      <Route path="/medium" element={<Products place={'medium'}/>} ></Route>
      <Route path="/mild" element={<Products place={'mild'}/>} ></Route>
    </Routes>
  )
}

export default App

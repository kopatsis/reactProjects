import React from 'react'
import Product from './Product'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Topbar from './Topbar'

const Products = ({place, data, addCart}) => {
  return (
    <>
        <Topbar inpath={place}/>
        <div>Products</div>
        <div>
            <nav>
                <Link to="/all">All Products</Link>
                <Link to="/extra">Extra Sharp</Link>
                <Link to="/sharp">Sharp</Link>
                <Link to="/medium">Medium</Link>
                <Link to="/mild">Mild</Link>
            </nav>
            <div>
                {data.filter(item => item.type === place || place === "all").map((item, index) => (
                    <Product key={index} item={item} place={place} addCart={addCart}/>
                ))}
            </div>
        </div>
        <Outlet context={{passedData: data, place: place}}/>
    </>
  )
}

export default Products
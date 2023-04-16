import React from 'react'
import Product from './Product'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Topbar from './Topbar'

const Products = ({place, data}) => {
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
                <Link to="/milkd">Mild</Link>
            </nav>
            <div>
                {data.filter(item => item.type === place || place === "all").map((item, index) => (
                    <Product key={index} item={item} index={index} />
                ))}
            </div>
        </div>
        <Outlet context={{passedData: data}}/>
    </>
  )
}

export default Products
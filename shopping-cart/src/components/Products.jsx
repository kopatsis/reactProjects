import React from 'react'
import Product from './Product'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Topbar from './Topbar'

const Products = ({place, data, addCart}) => {

const placeMatch = {
    "all": "All",
    "extra": "Extra Sharp",
    "sharp": "Sharp",
    "medium": "Medium",
    "mild": "Mild"
}

  return (
    <>
        <Topbar inpath={place}/>
        <h1 className='productstitle'>{placeMatch[place]} Products</h1>
        <div className='prodcolumns'>
            <nav className='filterlinks'>
                <Link to="/all" className={place === "all" ? "side-active" : "side-passive"}>All Products</Link>
                <Link to="/extra" className={place === "extra" ? "side-active" : "side-passive"}>Extra Sharp</Link>
                <Link to="/sharp" className={place === "sharp" ? "side-active" : "side-passive"}>Sharp</Link>
                <Link to="/medium" className={place === "medium" ? "side-active" : "side-passive"}>Medium</Link>
                <Link to="/mild" className={place === "mild" ? "side-active" : "side-passive"}>Mild</Link>
            </nav>
            <div className='prodgrid'>
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
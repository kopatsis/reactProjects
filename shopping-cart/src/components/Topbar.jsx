import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = ({inpath}) => {
  return (
    <header>
        <h1>Cheddar Depot</h1>
        <nav>
            <Link to={"/home"}>Home</Link>
            <Link to={"/all"}>Products</Link>
            <Link to={`/${inpath}/cart`}>Home</Link>
        </nav>
    </header>
  )
}

export default Topbar
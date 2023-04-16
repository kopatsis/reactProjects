import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const Topbar = ({inpath}) => {
  return (
    <header>
        <h1 onClick={() => Navigate('/home')}>Cheddar Depot</h1>
        <nav>
            <Link to={"/home"}>Home</Link>
            <Link to={"/all"}>Products</Link>
            <Link to={`/${inpath}/cart`}>Cart</Link>
        </nav>
    </header>
  )
}

export default Topbar
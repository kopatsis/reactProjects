import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Topbar = ({inpath}) => {

    const navigate = useNavigate();

    const navHome = () => {
        navigate('/home');
    }

  return (
    <header>
        <h1 onClick={navHome}>Cheddar Depot</h1>
        <nav>
            <Link to={"/home"}>Home</Link>
            <Link to={"/all"}>Products</Link>
            <Link to={`/${inpath}/cart`}>Cart</Link>
        </nav>
    </header>
  )
}

export default Topbar
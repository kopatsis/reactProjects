import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Topbar = ({inpath}) => {

    const navigate = useNavigate();

    const navHome = () => {
        navigate('/home');
    }

  return (
    <header>
        <h1 onClick={navHome} className='mainlogo'>Cheddar Depot</h1>
        <nav>
            <Link to={"/home"} className='home'>Home</Link>
            <Link to={"/all"} className='home'>Products</Link>
            <Link to={`/${inpath}/cart`} className='home'>Cart</Link>
        </nav>
    </header>
  )
}

export default Topbar
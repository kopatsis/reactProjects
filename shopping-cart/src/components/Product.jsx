import React from 'react'
import { useNavigate } from 'react-router-dom';

const Product = ({item, place, addCart}) => {

    const navigate = useNavigate();

    const navToDetailed = () => {
        navigate(`/${place}/${item.index}`);
    }

    const navToCart = () => {
        addCart({count: 1, img: item.src, name: item.name, price: item.price})
        navigate(`/${place}/cart`);
    }

  return (
    <div className='product'>
        <img src={item.src} onClick={navToDetailed}></img>
        <div>{item.name}</div>
        <div>
            <div>Price: {item.price}</div>
            <button onClick={navToCart}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Product
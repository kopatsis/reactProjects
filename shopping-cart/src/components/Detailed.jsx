import React from 'react'
import { useParams } from 'react-router-dom';
import { useOutletContext, useNavigate } from 'react-router-dom';

const Detailed = () => {

 const { id } = useParams();

 const context = useOutletContext()

 const item = context.passedData[id]

 const navigate = useNavigate();

    const navToCart = () => {
        navigate(`/${context.place}/cart`);
    }

 return (
    <div>
        <img src={item.src}></img>
        <div>{item.name}</div>
        <div>
            <div>Price: {item.price}</div>
            <div>Quantity</div>
            <button onClick={navToCart}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Detailed
import React from 'react'
import { useParams } from 'react-router-dom';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Detailed = ({add}) => {

 const { id } = useParams();

 const context = useOutletContext();

 const item = context.passedData[id];

 const navigate = useNavigate();

    const navToCart = () => {
        add({count: amount, img: item.src, name: item.name, price: item.price})
        navigate(`/${context.place}/cart`);
    }

    const [amount, setAmount] = useState(1);

 return (
    <div>
        <div>
            <button onClick={() => {navigate(`/${context.place}`);}}>X Close</button>
        </div>
        <img src={item.src}></img>
        <div>{item.name}</div>
        <div>
            <div>Price: {item.price}</div>
            <div>
                <button onClick={() => {
                    if(amount > 1){
                        setAmount(amount-1);
                    }
                }}>-</button>
                <span>Qty: {amount}</span>
                <button onClick={() => {setAmount(amount+1)}}>+</button>
                <button onClick={navToCart}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Detailed
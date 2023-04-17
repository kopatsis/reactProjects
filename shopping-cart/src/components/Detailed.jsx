import React from 'react'
import { useParams } from 'react-router-dom';
import { useOutletContext, useNavigate } from 'react-router-dom';

const Detailed = ({add}) => {

 const { id } = useParams();

 const context = useOutletContext()

 const item = context.passedData[id]

 const navigate = useNavigate();

    const navToCart = (event) => {
        event.preventDefault();
        add({count: event.currentTarget[0].value, img: item.src, name: item.name})
        navigate(`/${context.place}/cart`);
    }

 return (
    <div>
        <img src={item.src}></img>
        <div>{item.name}</div>
        <div>
            <div>Price: {item.price}</div>
            <div>
                <div>Qty</div>
                <form onSubmit={navToCart}>
                    <input type="number" min="1"></input>
                    <input type="submit" value="Add to Cart" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Detailed
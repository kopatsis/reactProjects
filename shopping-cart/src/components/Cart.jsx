import React, { useEffect, useState } from 'react'
import { useOutletContext, useNavigate } from 'react-router-dom'

const Cart = ({CD, edit, clear, del}) => {

  const navigate = useNavigate();

    const context = useOutletContext();

    const minus = (event) => {
      if(CD[parseInt(event.currentTarget.id)].count > 1){
        edit(parseInt(event.currentTarget.id), -1);
      }
    }

    const plus = (event) => {
      edit(parseInt(event.currentTarget.id), 1);
    }

    const useDel = (event) => {
      del(parseInt(event.currentTarget.id));
    }

    const [priceArr, setPriceArr] = useState([]);

    const [totals, setTotals] = useState(0);

    const createPrices = () => {
      let temp = [];
      CD.forEach((item) => {
        temp.push(parseFloat(item.price.slice(1))*item.count);
      });
      setPriceArr(temp);
    }

    useEffect(() => {
      createPrices();
    }, [CD]);

    useEffect(() => {
      setTotals(priceArr.reduce(function (a, b) {return a + b;}, 0));
    }, [priceArr])

  return (
    <div className='cart'>
      <div className='cart-inn'>
        <div>Cart</div>
        <div>
              <button onClick={() => {navigate(`/${context.place}`);}}>X Close</button>
          </div>
        {CD.map((item, index) => (
          <div key={index}>
            <img src={item.img}></img>
            <div>{item.name}</div>
            <div>
              <button id={index} onClick={minus}>-</button>
              <span>Qty: {item.count}</span>
              <button id={index} onClick={plus}>+</button>
              <button id={index} onClick={useDel}>Delete Item</button>
            </div>
            <div>Item Total: ${priceArr[index]}</div>
          </div>
        ))}
        {CD.length > 0 && <div>Total: ${totals}</div>}
        {CD.length > 0 && <button onClick={clear}>Clear Cart</button>}
      </div>
    </div>
  )
}

export default Cart
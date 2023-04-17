import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Cart = ({CD, edit, clear}) => {

    const context = useOutletContext();

    const minus = (event) => {
      edit(parseInt(event.currentTarget.id), -1);
    }

    const plus = (event) => {
      edit(parseInt(event.currentTarget.id), 1);
    }

  return (
    <>
      <div>Cart</div>
      {CD.map((item, index) => (
        <div key={index}>
          <img src={item.img}></img>
          <div>{item.name}</div>
          <div>
            <button id={index} onClick={minus}>-</button>
            <span>Qty: {item.count}</span>
            <button id={index} onClick={plus}>+</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default Cart
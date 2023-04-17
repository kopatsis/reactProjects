import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Cart = ({CD, edit, clear}) => {

    const context = useOutletContext();

  return (
    <>
      <div>Cart</div>
      {CD.map((item, index) => (
        <div key={index}>
          <img src={item.img}></img>
          <div>{item.name}</div>
          <div>Qty: {item.count}</div>
        </div>
      ))}
    </>
  )
}

export default Cart
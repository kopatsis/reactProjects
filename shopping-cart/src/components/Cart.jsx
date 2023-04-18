import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Cart = ({CD, edit, clear, del}) => {

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
            <button id={index} onClick={useDel}>Delete Item</button>
          </div>
        </div>
      ))}
      {CD.length > 0 && <button onClick={clear}>Clear Cart</button>}
    </>
  )
}

export default Cart
import React from 'react'

const Product = ({item, index}) => {
  return (
    <div>
        <img src={item.src}></img>
        <div>{item.name}</div>
        <div>
            <div>Price: {item.price}</div>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default Product
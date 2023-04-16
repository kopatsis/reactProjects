import React from 'react'
import { Outlet } from 'react-router-dom'

const Products = ({place}) => {
  return (
    <>
        <div>Products</div>
        <Outlet/>
    </>
  )
}

export default Products
import React from 'react'
import MenuItems from './MenuItems'

const item = [{
    name : "biryani",
    quantity : "2"
},{
    name : "chicken",
    quantity:'3'
}]
const Cart = () => {
  return (
    <MenuItems items={item}/>
  )
}

export default Cart
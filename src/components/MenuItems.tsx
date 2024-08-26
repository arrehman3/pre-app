import React from 'react'
type Props={
    items : {
        name : string;
        quantity: string;
    }
}

const MenuItems = (props:Props) => {
  return (
    <li>
        <h2>{props.items.name}</h2>
        <span>{props.items.quantity}</span>
    </li>
  )
}

export default MenuItems;
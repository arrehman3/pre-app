
type Props={
    items : {
        name : string;
        quantity: string;
    }[];
};

const MenuItems = (props:Props) => {
  return (
    <ul>
        {props.items.map((item,index)=>(
            <li key={index}>{item.name}:{item.quantity}</li>
        ))}
    </ul>
  )
}

export default MenuItems;
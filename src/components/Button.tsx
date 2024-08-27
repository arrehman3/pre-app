const Button = ({text="submit", bgColor="red"}) => {
  return (
    <button className={`bg-${bgColor}-600`}>{text}</button>
  )
}

export default Button;
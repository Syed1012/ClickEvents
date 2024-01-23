
const Button = () => {


    const handleClick = (name) => {
        console.log(`Hey ${name} welcome`)
    }


  return (
    <button onClick={() => handleClick('Syed')}>Click Here 🤷‍♀️</button>
  )
}

export default Button
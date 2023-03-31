import { useState } from 'react'

const UseStateGotcha = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    // not a synchronous function
    // setCount(count + 1)
    // will not print the latest value
    // console.log(count)

    // here we are using something that react provides
    // setState((prevState) => {
    // return {...prevState, value: newValue}, now you must return
    // something otherwise undefiend will be returned and the latest
    // state will be undefined
    // })
    // setCount((currentValue) => {
    //   const newValue = currentValue + 1
    //   console.log(newValue)
    //   return newValue
    // })

    // setTimeout(() => {
    //   console.log('clicked')
    //   setCount(count + 1)
    // }, 3000)

    setTimeout(() => {
        console.log('clicked');
        setCount((currentState) => {
          return currentState + 1
        })
    }, 3000)
  }
  return (
    <div>
      <h4>{count}</h4>
      <button className="btn" onClick={handleClick}>
        increase
      </button>
    </div>
  )
}

export default UseStateGotcha

import { useState } from 'react'

const UseStateBasics = () => {
  // const value = useState('hello')[0]
  // const fn = useState('hello')[1]
  // console.log(value)
  // console.log(fn);
  const handleClick = () => {
    setCount(count + 1)
    console.log(count);
  }
  const [count, setCount] = useState(0)
  return (
    <div>
      <h4> You clicked {count} times</h4>
      <button className="btn" onClick={handleClick}>
        click
      </button>
    </div>
  )
}

export default UseStateBasics

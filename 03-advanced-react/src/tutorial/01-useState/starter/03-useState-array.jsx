import { data } from '../../../data'
import { useState } from 'react'

const UseStateArray = () => {
  const [array, setArray] = useState(data)

  const removeElement = (id) => {
    let newList = array.filter((e) => e.id !== id)
    setArray(newList)
  }
  const removeAllElements = () => {
    setArray([])
  }

  return (
    <div>
      {array.map((element) => {
        const { id, name } = element
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              className="btn"
              onClick={() => {
                removeElement(id)
              }}
            >
              remove
            </button>
          </div>
        )
      })}
      <button
        className="btn"
        style={{ marginTop: '2rem' }}
        onClick={removeAllElements}
      >
        clear all
      </button>
    </div>
  )
}

export default UseStateArray

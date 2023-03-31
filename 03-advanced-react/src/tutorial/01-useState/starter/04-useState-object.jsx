import { useState } from 'react'

const people = [
  {
    id: 0,
    name: 'John',
    age: 24,
    hobby: 'Plays Path of Exile',
  },
  {
    id: 1,
    name: 'Ravi',
    age: 25,
    hobby: 'Screams at monitor',
  },
]

const UseStateObject = () => {
  const [person, setPerson] = useState(people[0])
  const { id, name, age, hobby } = person

  const handleClick = (id) => {
    setPerson({ ...person, name: 'paglu' })
  }

  return (
    <div>
      <h4>{name}</h4>
      <h4>{age}</h4>
      <h4>{hobby}</h4>
      <button
        className="btn"
        onClick={() => {
          handleClick(id)
        }}
      >
        show {name}
      </button>
    </div>
  )
}

export default UseStateObject

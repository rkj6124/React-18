import React from 'react'
import ReactDOM from 'react-dom/client'
import BookList from './BookList'

// import whole css file with extension unlike js file
import './index.css'

// function Greeting() {
//   return React.createElement('h2', {}, 'hello world')

//   // function must return html from a function, technically this html is called jsx
//   // also component = function
//   // jsx must return single element, can't have multiple elements
//   // should have single parent element (div)
// }

// much simpler than React.createElement()
// if you want to group elements can use extra div
//  / React.Fragment / <></> (Shorthand for React.Frag)
// camelCase property naming convention
// in browser className sets up eventually as class but in code it has
// to be className
// function Greeting() {
//   return (
//     <>
//       <div className="someValue">
//         <h2>My First Component</h2>
//       </div>
//       <h2>Hello world</h2>
//     </>
//   )
// }

// nested documents
// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   )
// }

// const Person = () => <h2>john doe</h2>
// const Message = () => {
//   return <p>This is my message</p>
// }

// how do we handle elements which does not have closing tags ?
// all the elements must self close them like <img /> <input />

// much difficult to maintain using React.createElement()
// function Greeting() {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h2', {}, 'hello world')
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

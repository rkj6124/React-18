import React from 'react'
import Book from './Book'

// using curly for named imports
import { books } from './books'

// can be banana instead of books for default export
// import books from './books'

// const firstBook = {
//   author: 'James Clear',
//   title: 'Tiny Changes, Remarkable Results',
//   img: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg',
// }

// const secondBook = {
//   author: 'Dav Pilkey',
//   title: 'Dog Man: Twenty Thousand Fleas Under the Sea',
//   img: 'https://images-na.ssl-images-amazon.com/images/I/81fyoFoaxlL._AC_UL600_SR600,400_.jpg',
// }

// if we want to render something between component tags like between
// Book, we need something called special props/children
// const BookList = () => {
//   return (
//     <section className="booklist">
//       <Book
//         author={firstBook.author}
//         title={firstBook.title}
//         img={firstBook.img}
//       >
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, vel
//           totam! Sapiente veritatis consectetur harum ut nemo ullam, atque
//           inventore!
//         </p>
//         <button>click me</button>
//       </Book>
//       <Book
//         author={secondBook.author}
//         title={secondBook.title}
//         img={secondBook.img}
//       />
//     </section>
//   )
// }

// const BookList = () => {
//   return (
//     <section className="booklist">
//       <Book
//         author={firstBook.author}
//         title={firstBook.title}
//         img={firstBook.img}
//       >
//       </Book>
//       <Book
//         author={secondBook.author}
//         title={secondBook.title}
//         img={secondBook.img}
//       />
//     </section>
//   )
// }

// can render simple array
// const names = ['ravi', 'kumar', 'jha']
// const BookList = () => {
//   return <section className="booklist">{names}</section>
// }

// objects are not valid as react child
// const BookList = () => {
//     return <section className='booklist'>{books}</section>
// }

// so in order for books to render , need to wrap array
// elements in an html, to do that we can use map method
// can render simple array
// rendering elements in array opens up door for
// dynamically render elements from iterating over an array
// const names = ['ravi', 'kumar', 'jha']
// const newNames = names.map((name) => {
//     // console.log(name);
//     return <h1>{name}</h1>
// })
// console.log(newNames)
// const BookList = () => {
//   return <section className="booklist">{newNames}</section>
// }

// const newBooks = books.map((book) => {
//     return <div>{book.title}</div>
// })
// const BookList = () => {
//     return <section className='booklist'>{newBooks}</section>
// }

// since we already have html present in Book component, we can use that
// const newBooks = books.map((book) => {
//   const { img, title, author, id } = book
//   return <Book img={img} title={title} author={author} key={id} />
// })
// const BookList = () => {
//   return <section className="booklist">{newBooks}</section>
// }

// or to instead of id you can use index, but its not advisable
// only works for a list you know will not change
// high chance to get some bugs, only use it if the list is not
// going to change
// const newBooks = books.map((book, index) => {
//   const { img, title, author } = book
//   return <Book img={img} title={title} author={author} key={index} />
// })
// const BookList = () => {
//   return <section className="booklist">{newBooks}</section>
// }

// const newBooks = books.map((book) => {
// //   const { img, title, author, id } = book
//   return <Book book={book} key={book.id} />
// })
// const BookList = () => {
//   return <section className="booklist">{newBooks}</section>
// }

// using spread operator, now for this we are not
// accessing anything from book in Book Component
// hence replace props.book with just props
// const newBooks = books.map((book) => {
//   //   const { img, title, author, id } = book
//   return <Book {...book} key={book.id} />
// })

// event example
// const EventExample = () => {
//     // onChange, onClick are some of the few events
//     // all the events are mentioned in React docs
//   const handleFormInput = (event) => {
//     // input target / input html
//     console.log(event.target)
//     // input name
//     console.log(event.target.name)
//     // input value
//     console.log(event.target.value)
//     console.log('handle form input')
//   }
//   const handleButtonClick = () => {
//     alert('handle button click')
//   }
//   const handleFormSubmission = (event) => {
//     // to handle the submission manually
//     event.preventDefault()
//     // console.log()
//     console.log('form submitted')
//   }
//   return (
//     <section>
//       <form onSubmit={handleFormSubmission}>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="example"
//           style={{ margin: '1rem 0' }}
//           onChange={handleFormInput}
//         />
//       </form>
//       <button onClick={handleButtonClick}>click me</button>
//     </section>
//   )
// }

// const someValue = 'shake and bake'
// react data flow - can only pass props down
// for a lot of nested components and need to pass down to
// the lowest child , its basically a prop drilling, you will have
// to pass down props from all the children till it reaches the
// required child, unless
// you use Context API, redux etc .
// const displayValue = () => {
//   console.log(someValue)
// }

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }

  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book {...book} key={book.id} getBook={getBook} number={index} />
          )
        })}
      </section>
    </>
  )
}

export default BookList

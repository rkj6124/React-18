import React from 'react'

// const Book = () => {
//   return (
//     <article className="book">
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   )
// }

// const author = 'James Clear';
// const Book = () => {
//     const title = 'Tiny Changes, Remarkable Results'
//   return (
//     <article className="book">
//       <img
//         src="https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg"
//         alt="Atomic Habbits"
//       />
//       <h2>{title}</h2>
//       <h4>{author.toUpperCase()}</h4>
//       {/* only expression allowed in swiggly brackets */}
//       {/* following will not work */}
//       {/* <p>{let x =6}</p> */}
//       {/* following will work */}
//       {/* <p>{6 + 6}</p> */}

//     </article>
//   )
// }

// need props to have same structure but with different data
// here Book has the same structure but need to have different books
// in book list, so Book needs to accept props
// props will only be displayed if they are provided
// const Book = (props) => {
//     console.log(props);
//   return (
//     <article className="book">
//       <img src={props.img} alt={props.title} />
//       <h2>{props.title}</h2>
//       <h4>{props.author.toUpperCase()}</h4>
//     </article>
//   )
// }

// shortening the props
const Book = (props) => {
  const { img, title, author } = props
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}

// children / special props
// const Book = ({ img, title, author, children }) => {
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author.toUpperCase()}</h4>
//       {children}
//     </article>
//   )
// }

// const Book = ({ img, title, author }) => {
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author.toUpperCase()}</h4>
//     </article>
//   )
// }


// after passing whole object as prop
// const Book = ({book: { img, title, author }}) => {
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author.toUpperCase()}</h4>
//     </article>
//   )
// }

// or 
// const Book = (props) => {
//     const {img, title, author} = props.book
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author.toUpperCase()}</h4>
//     </article>
//   )
// }

// When it comes to images we have 3 options
// - image hosted on a server, there is always going to be a url
// now two options for local images -
// - public folder (not performant) - src folder (better solution for assets),
//  since under the hood they get optimized.
// const Image = () => {
//   return (
//     <img
//       src="https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg"
//       alt="Atomic Habbits"
//     />
//   )
// }
// const Title = () => <h2>title of the book</h2>

// inline styles
// inline takes precedence over external css
// some libraries often use internal css, so sometimes it
// won't be enough to change the css, so always first check the
// elements in browser for the inline style if you are trying
// to modify that.
// const Author = () => (
//   <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
//     author
//   </h4>
// )

// const Author = () => {
//   const inlineHeadingStyles = {
//     color: '#617d98',
//     fontSize: '0.75rem',
//     marginTop: '0.5rem',
//   };
//   <h4 style={inlineHeadingStyles}>James Clear</h4>
// }

// const Author = () => {
//   return <h4>James Clear</h4>
// }

export default Book

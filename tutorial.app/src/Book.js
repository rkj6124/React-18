import React from 'react'

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

// When it comes to images we have 3 options 
// - image hosted on a server, there is always going to be a url
// now two options for local images - 
// - public folder (not performant) - src folder (better solution for assets),
//  since under the hood they get optimized.
const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg"
      alt="Atomic Habbits"
    />
  )
}
const Title = () => <h2>title of the book</h2>
const Author = () => <h4>author</h4>

export default Book

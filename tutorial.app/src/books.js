import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
// export const books = [ ... ] -> this is a named import so we need 
// to use named import with {books} to import 
export const books = [
  {
    id: 1,
    author: 'James Clear',
    title: 'Tiny Changes, Remarkable Results',
    img: img1,
  },

  {
    // for unique key props it doesn't have to say id, it can
    // be food truck, and the value doesn't have to be number,
    // it can be string but the value should be unique
    // ques - where to set key ? ans - on  the item being iterated
    id: 2,
    author: 'Dav Pilkey',
    title: 'Dog Man: Twenty Thousand Fleas Under the Sea',
    img: img2,
},

  {
    id: 3,
    author: 'Taylor Jenkins Reid',
    title: 'Daisy Jones & The Six',
    img: img3,
  },
]

// with default export we can name it whaterver we like when importing
// export default books
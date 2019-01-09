const axios = require('axios')
import {createKey} from '../utils'

//mock data for testing
let mockBooks = [
  {
    key: 1,
    title: 'Jon',
    author_name: 'Jon Tang',
    edition_count: 100,
    ebook_count_i: 5,
    first_publish_year: 1992
  },
  {
    key: 2,
    title: 'Erica',
    author_name: 'Erica Luong',
    edition_count: 200,
    ebook_count_i: 1,
    first_publish_year: 1990
  },
  {
    key: 3,
    title: 'Judas',
    author_name: 'Judas Bible',
    edition_count: 400,
    ebook_count_i: 0,
    first_publish_year: 4000
  },
  {
    key: 4,
    title: 'Money',
    author_name: 'Money Tree',
    edition_count: 300,
    ebook_count_i: 0,
    first_publish_year: 3000
  }
]

const initialState = []

//ACTION TYPES
const GOT_BOOKS = 'GOT_BOOKS'

//ACTION CREATORS
export const gotBooks = books => ({
  type: GOT_BOOKS,
  books
})

//THUNK CREATORS
//formatTitle is input from user (i.e. user enters in book title in the search field)
export const fetchBooks = input => {
  return async dispatch => {
    try {
      let count = 0
      console.log('hitting fetchBooks thunk:', (count += 1))
      //Potential: break this out into utils function
      const formatInput = input.split(' ').join('+')
      // Used destructuring to parsed response to get only books object
      const {data: books} = await axios.get(
        `http://openlibrary.org/search.json?title=${formatInput}`
      )
      // console.log('AXIOS Reponse', books)
      const action = gotBooks(books.docs)
      // const action = gotBooks(mockBooks) //to delete. Testing.
      dispatch(action)
    } catch (err) {
      console.log(err)
    }
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_BOOKS:
      return [...action.books]
    default:
      return state
  }
}

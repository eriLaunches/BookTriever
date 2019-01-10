const axios = require('axios')

const initialState = []

//ACTION TYPES
const SET_BOOKS = 'SET_BOOKS'

//ACTION CREATORS
export const setBooks = books => ({
  type: SET_BOOKS,
  books
})

//THUNK CREATORS
export const fetchBooks = input => {
  return async dispatch => {
    try {
      const formatInput = input.split(' ').join('+')
      // Used destructuring to parsed response to get only books object
      const {data: books} = await axios.get(
        `https://openlibrary.org/search.json?title=${formatInput}`
      )
      const action = setBooks(books.docs)
      dispatch(action)
    } catch (err) {
      console.log(err)
    }
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_BOOKS:
      return [...action.books]
    default:
      return state
  }
}

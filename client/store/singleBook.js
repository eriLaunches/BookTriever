const axios = require('axios')

const initialState = {}

//ACTION TYPES
const SET_BOOK = 'GOT_BOOK'

//ACTION CREATORS
export const setBook = book => ({
  type: SET_BOOK,
  book
})

//THUNK CREATOR
//Passing in type (i.e. isbn,oclc,lccn,olid) and corresponding id to obtain book description from Open Libr Book API. If book description is available, then dispatch action to update store.
export const fetchBook = identifier => {
  return async dispatch => {
    try {
      const response = await axios.get(
        `https://openlibrary.org/api/books?bibkeys=${identifier.type}:${
          identifier.id
        }&jscmd=details&format=json`
      )
      let data = response.data[`${identifier.type}:${identifier.id}`]
      if (data.details.description) {
        const action = setBook(data.details)
        dispatch(action)
      } else {
        dispatch(setBook(initialState))
      }
    } catch (err) {
      console.log(err)
    }
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_BOOK:
      return {...action.book}
    default:
      return state
  }
}

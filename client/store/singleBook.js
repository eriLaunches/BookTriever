const axios = require('axios')
import {createKey} from '../utils'

const initialState = {}

//ACTION TYPES
const GOT_BOOK = 'GOT_BOOK'

//ACTION CREATORS
export const gotBook = book => ({
  type: GOT_BOOK,
  book
})

//THUNK CREATORS
//searchValue is input from user (i.e. user enters in book title in the search field)
export const fetchBook = input => {
  return async dispatch => {
    try {
      console.log('hitting this fetch single book thunk?')
      //Potential: break this out into utils function

      const response = await axios.get(
        `https://openlibrary.org/api/books?bibkeys=ISBN:${input}&jscmd=details&format=json`
      )
      console.log('SingleBook', response.data)
      let data = response.data[`ISBN:${input}`]
      const action = gotBook(data)
      dispatch(action)
    } catch (err) {
      console.log(err)
    }
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_BOOK:
      return {...action.book}
    default:
      return state
  }
}

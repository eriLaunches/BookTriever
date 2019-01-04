const axios = require('axios')
import {createKey} from '../utils'

const initialState = []

//ACTION TYPES
const GOT_BOOKS = 'GOT_BOOKS'

//ACTION CREATORS
export const gotBooks = books => ({
  type: GOT_BOOKS,
  books
})

// //THUNK CREATORS
export const fetchBooks = (input) =>  {
  return async (dispatch) => {
    try {
      console.log('hitting this thunk?')
      //Potential: break this out into utils function
      const searchValue = input.split(" ").join('+')
      console.log('searchvalue',searchValue)
      const response = await axios.get(`http://openlibrary.org/search.json?q=${searchValue}`)
      const action = gotBooks(response.data.docs)
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

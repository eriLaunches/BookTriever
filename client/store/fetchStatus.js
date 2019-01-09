const initialState = false

//ACTION TYPES
const SET_STATUS = 'SET_STATUS'

//ACTION CREATORS
export const setStatus = status => ({
  type: SET_STATUS,
  status
})

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_STATUS:
      return action.status
    default:
      return state
  }
}

import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import books from './books'
import book from './singleBook'

const reducer = combineReducers({
  user,
  books,
  book
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

// import { loadState, saveState } from './localStorage'

// //To persist the state of the application using localStorage
// const persistedState = loadState()
// store.subscribe(() => {
//   saveState(store.getState())
// })

const store = createStore(reducer, middleware)

export default store
export * from './user'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {fetchBooks} from '../store/books.js'
import SearchResults from './SearchResults'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputName: '',
      hasSearched: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    //set state with the user input value
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    await this.props.onFetchBooks(this.state.inputName)
    this.setState({hasSearched: true})
  }

  render() {
    console.log(this.state)
    const hasSearched = this.state.hasSearched
    const books = this.props.books
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="inputName">
                <small>Input Your Search Here</small>
              </label>
              <input
                name="inputName"
                type="text"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button type="submit">Search</button>
            </div>
          </form>
        </div>
        <div>{hasSearched ? <SearchResults books={books} /> : null}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books
})

const mapDispatchToProps = dispatch => ({
  onFetchBooks: input => dispatch(fetchBooks(input))
})

const ConnectMain = connect(mapStateToProps, mapDispatchToProps)(Main)
export default ConnectMain

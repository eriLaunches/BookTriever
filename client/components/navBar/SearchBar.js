import React from 'react'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'

const SearchResults = props => {
  const {handleSubmit, handleChange} = props
  return (
    <div>
      <form onSubmit={handleSubmit} className="nav-search-container">
        <label htmlFor="nav-searchbar" />
        <input
          id="nav-searchbar"
          name="searchValue"
          type="text"
          placeholder="Search for more books..."
          onChange={handleChange}
        />
        <SearchIcon id="nav-search-icon" type="submit" />
      </form>
    </div>
  )
}

export default SearchResults

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


const SortResults = (props) => {
  const books = props.books
  return (
    <div>
      <label>Sort by</label>
      <select name='selectedSort' onChange={this.handleSelect}>
          <option value='relevance'>Relevance</option>
          <option value='mostEditions'> Most Editions </option>
          <option value='firstPublished'> First Published </option>
          <option value='mostRecent'  > Most Recent </option>
        </select>
    </div>
  )
}

export default SortResults

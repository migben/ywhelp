import React from 'react'

const Search = props => {

  let handleChange = e => {
    props.changeSearchTerm(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt" 
          onChange={ handleChange }  
          value={ props.restSearchTerm }
          />
      </div>
    </div>
  )
}

export default Search

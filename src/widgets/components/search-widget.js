import React from 'react'
import './search.css'

const SearchWidget = (props) => (
  <form
    className="Search"
    onSubmit={props.handleSubmit}>
    <input
      ref={props.setRef}
      placeholder="Busca tu video favorito"
      className="Search-input"
      type="text"
      onChange={props.handleInputChange}
      value={props.value}
    />
  </form>
)

export default SearchWidget

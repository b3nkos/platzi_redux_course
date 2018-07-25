import React, { Component } from 'react'
import SearchWidget from '../components/search-widget'
import { connect } from 'react-redux'

class SearchContainer extends Component {
  state = {
    value: 'Luis Fonsi'
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch({
      type: 'SEARCH_VIDEO',
      payload: {
        query: this.input.value
      }
    })
  }

  setInputRef = element => {
    this.input = element
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <SearchWidget
        handleSubmit={this.handleSubmit}
        setRef={this.setInputRef}
        handleInputChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}

export default connect()(SearchContainer)

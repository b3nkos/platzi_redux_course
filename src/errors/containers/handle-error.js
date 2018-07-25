import React from 'react'
import RegularError from '../components/regular-error'

class HandleError extends React.Component {
  state = {
    handleError: false
  }

  componentDidCatch(error, info) {
    //send this error to service like sentry
    this.setState({
      handleError: true
    })
  }

  render() {
    if(this.state.handleError) {
      return (
        <RegularError/>
      )
    }
    return this.props.children
  }
}

export default HandleError
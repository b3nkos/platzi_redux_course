import React from 'react'
import Media from '../components/media'
import { connect } from 'react-redux'

class MediaContainer extends React.Component {
  render() {
    return <Media {...this.props.data} />
  }
}

const mapStateToProps = (state, props) => {
  return {
    data: state.dataReducer.entities.media[props.id]
  }
}

export default connect(mapStateToProps)(MediaContainer)
import React from 'react'
import FullScreenIcon from "../../icons/components/full-screen"
import './full-screen-component.css'

const FullScreenComponent = props => (
  <div className="FullScreen" onClick={props.handleFullScreenClick}>
    <FullScreenIcon
      color="white"
      size={25}
    />
  </div>
)

export default FullScreenComponent

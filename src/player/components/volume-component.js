import React from 'react'
import './volume-component.css'
import VolumeIcon from '../../icons/components/volume'

const Volume = props => {
  return (
    <div className="Volume">
      <a
        href="javascript:void(0)"
        onClick={props.handleVolumeClick}
      >
        <VolumeIcon
          color="white"
          size={25}
        />
      </a>
      <div className="Volume-range">
        <input
          ref={props.setVolumeRef}
          type="range"
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumeChange}
        />
      </div>
    </div>
  )
}

export default Volume

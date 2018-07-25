import React from 'react'
import './spinner.css'

const SpinnerComponent = props => {
  if(!props.active) return null;
  return (
    <div className='Spinner'>
      <span>Cargando...</span>
    </div>
  )
}

export default SpinnerComponent

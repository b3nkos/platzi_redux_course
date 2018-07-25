import React from 'react'
import Playlist from '../../playlist/components/playlist'
import './category.css'

function Category(props) {
  return (
    <div className="Category">
      <p className="Category-title">{props.description}</p>
      <h2 className="Category-description">{props.title}</h2>
      <Playlist
        playlist={props.playlist}
        handleOpenModal={props.handleOpenModal}
      />
    </div>
  )
}

export default Category
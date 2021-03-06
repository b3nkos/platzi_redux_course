const initialState = {
  visibility: false,
  mediaId: null
}

const modal = (state = initialState, action) => {
  switch(action.type) {
    case 'OPEN_MODAL':
      return state
    case 'CLOSE_MODAL':
      return state
    default:
      return state
  }
}

export default modal
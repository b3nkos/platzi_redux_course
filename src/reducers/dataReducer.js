import data from '../schemas/index'

const initialState = {
  entities: data.entities,
  categories: data.result.categories,
  search: []
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_VIDEO':
      let results = [];

      results = Object.entries(state.entities.media).filter(media =>
        media.author.toLowerCase()
        .includes(action.payload.query.toLowerCase().trim())
      )

      /*if(action.payload.query) {
        state.data.categories.map(categories =>
          results = results.concat(categories.playlist)
            .filter(item => item.author.toLowerCase()
              .includes(action.payload.query.toLowerCase().trim())))
      }*/

      return {
        ...state,
        search: results
      }
    default:
      return state
  }
}

export default dataReducer

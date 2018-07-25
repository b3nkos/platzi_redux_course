import dataReducer from './dataReducer'
import modalReducer from './modalReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  dataReducer,
  modalReducer
})

export default rootReducer
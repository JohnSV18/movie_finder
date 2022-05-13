import { combineReducers } from 'redux'
import wordReducer from './word-reducer.js'

export default combineReducers({
  words: wordReducer
})
import { ADD_SEARCHED_WORD, EDIT_SEARCHED_WORD, DELETE_SEARCHED_WORD } from '../actions'

const wordReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_SEARCHED_WORD:
      const { word } = action.payload
      return [...state, { word }]

    case DELETE_SEARCHED_WORD:
      const { index } = action.payload
      return [...state.slice(0, index), ...state.slice(index + 1)]

    case EDIT_SEARCHED_WORD:
      return state.map((item, index) => {
        if (index !== action.payload.index) {
          return item
        }
        return { ...item, ...action.payload }
      })

    default:
      return state
  }
}

export default wordReducer
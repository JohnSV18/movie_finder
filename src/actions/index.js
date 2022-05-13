export const ADD_SEARCHED_WORD = 'ADD_SEARCHED_WORD';
export const EDIT_SEARCHED_WORD = 'EDIT_SEARCHED_WORD';
export const DELETE_SEARCHED_WORD = 'DELETE_SEARCHED_WORD';

export const addSearchedWord = ( word ) => {
    return {
        type: ADD_SEARCHED_WORD,
        payload: word
    }
}
export const deleteSearchedWord = (index) => {
    return {
        type: DELETE_SEARCHED_WORD,
        payload: index
    }
}
export const editSearchedWord = (index, word) => {
    return {
        type: EDIT_SEARCHED_WORD,
        payload: {
            index,
            word
        }
    }
}
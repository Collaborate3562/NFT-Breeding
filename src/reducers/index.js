import {combineReducers} from 'redux'

const search_word = (state = {search_word: ""}, action) => {
    switch(action.type){
        case "SEARCH_WORD":
            return {
                ...state,
                search_word: action.payload
            }
        default:
            return state
    }
}


const rootReducer = combineReducers({
    search_word,
})

export default rootReducer
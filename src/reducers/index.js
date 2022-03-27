import {combineReducers} from 'redux'

const search_word = (state = {search_word: ""}, action) => {
    switch(action.type){
        case "SEARCH_WORD":
            console.log(action.type)
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
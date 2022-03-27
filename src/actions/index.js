const setSearchWord = (search_word) => {
    return {
        type: "SET_USER",
        payload: search_word
    }
}


export default {
    setSearchWord
}
const initState = {
    topRated: [],
    upcoming: [],
    nowPlaying: [],
    popular: [],
    trending: [],
    searched: []
}

const moviesReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_MOVIES":
            return { ...state, 
                topRated: action.payload.topRated,
                upcoming: action.payload.upcoming,
                nowPlaying: action.payload.nowPlaying,
                popular: action.payload.popular,
                trending: action.payload.trending
            }
        case "FETCH_SEARCHED":
            return {
                ...state,
                searched: action.payload.searched
            }
        default: 
            return {...state}
    }
}

export default moviesReducer
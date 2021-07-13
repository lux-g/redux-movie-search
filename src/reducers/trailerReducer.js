const initialState = { trailer: {} }

const trailerReducer = (state=initialState, action) => {
    switch(action.type){
        case "GET_TRAILER":
            return{
                ...state,
                trailer: action.payload.trailer
            }
        default: 
            return{...state}
    }
}

export default trailerReducer
const initialState = { similar: []}

const similarReducer = (state=initialState, action) => {
    switch(action.type){
        case "GET_SIMILAR":
            return {
                ...state,
                similar: action.payload.similar
            }
        default : {
            return {...state}
        }
    }
}

export default similarReducer
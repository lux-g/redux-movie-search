const initialState = { credits: {}};

const creditsReducer = (state=initialState, action) => {
    switch(action.type){
        case "GET_CREDITS":
            return{
                ...state,
                credits: action.payload.credits
            }
        default:
            return {...state}
    }
}

export default creditsReducer
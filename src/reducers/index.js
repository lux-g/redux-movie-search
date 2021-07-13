import { combineReducers } from "redux";
import moviesReducer from './moviesReducer'
import detailReducer from "./detailReducer"
import trailerReducer from "./trailerReducer";
import similarReducer from "./similarReducer";
import creditsReducer from "./creditsReducer";

const rootReducer = combineReducers({
    movies: moviesReducer,
    detail: detailReducer,
    trailer: trailerReducer,
    similar: similarReducer,
    credits: creditsReducer,
})

export default rootReducer;
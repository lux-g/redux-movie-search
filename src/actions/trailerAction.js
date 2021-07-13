import axios from "axios";
import { getTrailerURL } from "../Api/api";


export const loadTrailer = (id) => async (dispatch) => {
    const trailerData = await axios.get(getTrailerURL(id))
    dispatch({
        type: "GET_TRAILER",
        payload: {
            trailer: trailerData.data.results
        }
    })
}
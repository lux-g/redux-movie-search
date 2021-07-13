import axios from "axios";
import { getSimilarURL } from "../Api/api";

//Action Creator

export const loadSimilar = (id) => async (dispatch) => {
    //fetch w axios
    const similarData = await axios.get(getSimilarURL(id))
    dispatch({
        type: "GET_SIMILAR",
        payload: {
            similar: similarData.data.results.slice(0,6)
        }
    })
}
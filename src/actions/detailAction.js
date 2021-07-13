import axios from "axios";
import { getDetailsURL } from "../Api/api";

//Action Creator

export const loadDetails = (id) => async (dispatch) => {
    //Fetch w/ axios
    const detailData = await axios.get(getDetailsURL(id))
    dispatch({
        type: "GET_DETAIL",
        payload: {
            movie: detailData.data
        }
    })
}
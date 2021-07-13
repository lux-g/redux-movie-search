import axios from "axios";
import { creditsURL } from "../Api/api";

export const loadCredits = (id) => async (dispatch) => {
    //Fetch w/ axios
    const creditsData = await axios.get(creditsURL(id))
    dispatch({
        type: "GET_CREDITS",
        payload: {
            credits: creditsData.data,
        }
    })
}
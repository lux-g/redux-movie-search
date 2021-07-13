import axios from "axios";
import { topRatedURL, upcomingUrl, nowPlayingUrl, popularURL, trendingURL, searchMovieURL } from "../Api/api";

//Action Creator

export const loadMovies = () => async (dispatch) => {
    //Fetch w/ axios
    const topRatedMovies = await axios.get(topRatedURL());
    const upcomingMovies = await axios.get(upcomingUrl());
    const nowPlayingMovies = await axios.get(nowPlayingUrl());
    const popularMovies = await axios.get(popularURL());
    const trendingMovies = await axios.get(trendingURL());
    dispatch({
        type: "FETCH_MOVIES",
        payload: {
            topRated: topRatedMovies.data.results,
            upcoming: upcomingMovies.data.results,
            nowPlaying: nowPlayingMovies.data.results,
            popular: popularMovies.data.results,
            trending: trendingMovies.data.results
        }
    })
}

export const fetchSearch = (movie_name) => async (dispatch) => {
    //Fetch w/ axios
    const searchedMovies = await axios.get(searchMovieURL(movie_name));
    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchedMovies.data.results
        }
    })
}
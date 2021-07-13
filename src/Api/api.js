const API_KEY = '969eff075f7d2012082300be0a0c9d7a'
const baseURL = "https://api.themoviedb.org/3/"


const topRated = `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
const upcoming = `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
const nowPlaying = `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
const popular = `movie/popular?api_key=${API_KEY}&language=en-US&page=1`
const trending = `trending/movie/day?api_key=${API_KEY}`


export const topRatedURL = () => `${baseURL}${topRated}`
export const upcomingUrl = () => `${baseURL}${upcoming}`
export const nowPlayingUrl = () => `${baseURL}${nowPlaying}`
export const popularURL = () => `${baseURL}${popular}`
export const trendingURL = () => `${baseURL}${trending}`

//Movie Details
export const getDetailsURL = (movie_id) => `${baseURL}movie/${movie_id}?api_key=${API_KEY}&language=en-US`
export const getTrailerURL = (movie_id) => `${baseURL}movie/${movie_id}/videos?api_key=${API_KEY}`
export const getSimilarURL = (movie_id) => `${baseURL}movie/${movie_id}/similar?api_key=${API_KEY}&language=en-US&page=1`

//Searched Movie
export const searchMovieURL = (movie_name) => `${baseURL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${movie_name}`

//Movie Credits
export const creditsURL = (movie_id) => `${baseURL}movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`

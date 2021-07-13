import React from 'react'
import { useDispatch } from 'react-redux'
import { loadDetails } from '../actions/detailAction'
import { Link } from 'react-router-dom'



const MovieRow = ({ posterPath, id }) => {

    const dispatch = useDispatch()
    const loadDetailHandler = () => {
        dispatch(loadDetails(id))
    }

    return (
        <div className="movie-row">
            <div className="movie-images">
                <Link to={`/movie/${id}`}>
                    <img onClick={loadDetailHandler} src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt="movie" />
                </Link>
            </div>
        </div>
    )
}

export default MovieRow

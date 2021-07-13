import React from 'react'
import { Link } from 'react-router-dom'

const MovieSimilar = ({ similar }) => {

    console.log(similar)

    return (
        <div>
            <h1>Similar</h1>
            {similar.map((movie, index) => (
                <div key={index}>
                    <Link to={`/movie/${movie?.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default MovieSimilar

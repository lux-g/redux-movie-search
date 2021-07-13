import React from 'react'


const MovieCast = ({ profilePath }) => {

    return (
        <div className="cast-cast">
            <img className="cast-img" src={`https://image.tmdb.org/t/p/w200${profilePath}`} alt="" />
        </div>
    )
}

export default MovieCast

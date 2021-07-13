import React from 'react'
import { Link } from 'react-router-dom'


const FeatureMovie = ({ nowPlaying }) => {

    //only returns moves that have backdrop_path image
    let filteredMovies = nowPlaying.filter((movie) => {
        return movie.backdrop_path
    })
    filteredMovies = filteredMovies[Math.floor(Math.random() * filteredMovies.length)]

    //sets movie overview to max of 175 characters
    const truncate = (string, num) => {
        return string?.length > num ? string.substr(0, num -1) + "..." : string;
    }

    return (
        <div className="banner-cover">
            <div className="banner" style={{
                backgroundImage: `linear-gradient(0deg, rgba(20,20,20,1) 20%, rgba(20,20,20,0.45) 100%), url("https://image.tmdb.org/t/p/w1280/${filteredMovies?.backdrop_path}")`
            }}>
                <div className="banner-content">
                    <div className="banner-content__title">
                        <h1>
                            {filteredMovies?.title || filteredMovies?.name || filteredMovies?.original_path}
                        </h1>
                    </div>
                    <div className="details">
                        <Link to={`/movie/${filteredMovies?.id}`}>
                            <button className="details__btn">MORE INFO</button>
                        </Link>     
                        <p className="details__overview">{truncate(filteredMovies?.overview, 175)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureMovie

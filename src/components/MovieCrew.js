import React from 'react'
import Footer from './Footer'


const MovieCrew = ({ crew }) => {

    //only returns moves that have image
    const filteredCrew = crew?.filter(movie => {
        return movie.profile_path
    })

    return (
        <>
        {filteredCrew?.length === 0 ? (<p></p>) : (
            <div className="crew-wrapper">
                <h1 className="crew-wrapper__title">CREW</h1>
                <div className="crew-wrapper__crew">
                    {filteredCrew?.slice(0, 9).map((movie, index) => (
                        <div key={index}>
                            <div className="crew-details">
                                <img className="crew-details__crew-img" src={`https://image.tmdb.org/t/p/w200${movie?.profile_path}`} alt="crew" />
                                <div className="crew-names">
                                    <p className="crew-details__crew-name">{movie?.original_name}</p>
                                    <p className="crew-details__crew-job">{movie?.job}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}

        <Footer/>
        </>
    )
}

export default MovieCrew

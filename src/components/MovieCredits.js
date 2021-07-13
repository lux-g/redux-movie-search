import React from 'react'


const MovieCredits = ({ credits }) => {

    //only returns moves that have image
    const filteredCredits = credits?.filter(movie => {
        return movie.profile_path
    })

    return (
        <>
        {filteredCredits?.length === 0 ? (<p></p>) : (
            <div className="cast-wrapper">
                <h1 className="cast-wrapper__title">CAST</h1>
                <div className="cast-wrapper__cast">
                    {filteredCredits?.slice(0, 9).map((movie, index) => (
                        <div key={index}>
                            <div className="cast-details">
                                <div className="cast-details-wrapper">
                                    <img className="cast-details__cast-img" src={`https://image.tmdb.org/t/p/w200${movie?.profile_path}`} alt="cast" />
                                    <div className="cast-names">
                                        <p className="cast-details__cast-name">{movie?.name}</p>
                                        <p className="cast-details__cast-char">{movie?.character}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ) }

        </>
    )
}

export default MovieCredits

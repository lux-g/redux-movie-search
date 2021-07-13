import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import  { fetchSearch } from '../actions/moviesAction'
import Footer from './Footer'


export const SearchResults = () => {

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchSearch())
        window.scrollTo(0, 0)
    },[dispatch])

    
    const { searched } = useSelector((state) => state.movies)

    console.log(searched)

    return (
        <>
        {searched.length === 0 ? (
            <div className="no-results">
                <h1>No Results Found</h1>
            </div>
        ) : (
            <div className="search-results-container">
                <div className="search-results">
                    {searched?.filter(movie => movie.poster_path).map((movie, index) =>(
                        <div className="search-wrapper" key={index}>
                            <Link to={`/movie/${movie.id}`}>
                                <img className="searched-img" src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" />
                            </Link>
                        </div>
                    ))}
                </div>
             <Footer/>
            </div>
        )}

        </>
    )
}

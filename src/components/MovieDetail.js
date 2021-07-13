import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { loadDetails } from '../actions/detailAction'
import { loadTrailer } from '../actions/trailerAction'
import { loadCredits } from '../actions/creditsAction'
import { loadSimilar } from '../actions/similarAction'
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.min.css"
import MovieCredits from './MovieCredits'
import MovieCrew from './MovieCrew'
//import MovieSimilar from './MovieSimilar'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

//Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);





const MovieDetail = () => {

    const { id } = useParams()
    const dispatch = useDispatch()

    //state for modal
    const [isOpen, setOpen] = useState(false)


    //run dispatch when component loads
    useEffect(()=> {
        dispatch(loadDetails(id))
        dispatch(loadTrailer(id))
        dispatch(loadCredits(id))
        //dispatch(loadSimilar(id))

    },[dispatch])

    useEffect(()=> {
        window.scrollTo(0, 0)
        
    },[])


    //get data from state
    const detail = useSelector(state => state.detail)
    const trailer = useSelector(state => state.trailer)
    //const similar = useSelector(state => state.similar.similar)
    const credits = useSelector(state => state.credits.credits.cast)
    const crew = useSelector(state => state.credits.credits.crew)


    return (
        <>
        <div className="detail-banner" style={{
                backgroundImage: `linear-gradient(0deg, rgba(20,20,20,1) 20%, rgba(20,20,20,0.80) 100%), url("https://image.tmdb.org/t/p/w1280/${detail.movie?.backdrop_path}")`
                }}>
                <div className="details-wrapper">
                    <div className="detail-movie">
                        <div className="detail-wrapper">
                            <div className="detail-image">
                                    <img className="detail-banner__img" src={`https://image.tmdb.org/t/p/w500${detail.movie?.poster_path}`}/>
                                </div>
                                <div className="detail-info">
                                    <h1 className="detail-info__title">{detail.movie?.title || detail.movie?.original_name || detail.movie?.name} ({detail.movie?.release_date?.slice(0, 4)})</h1>
                                    <p className="detail-info__runtime">{detail.movie.runtime} min</p>
                                    <div className="detail-info__genres">{detail.movie.genres?.map((m, i) => (
                                            <p key={i}>{m.name} |</p>
                                            ))}
                                    </div> 
                                    <p className="detail-info__tagline">{detail.movie?.tagline}</p>
                                    <button className="detail-info__btn" onClick={()=> setOpen(true)}>Play Trailer</button>
                                    <p className="detail-info__overview">{detail.movie.overview}</p>
                                </div>
                            </div>

                        <div className="movie-cast">
                            <MovieCredits credits={credits}/>
                        </div>
                        <div className="movie-crew">
                            <MovieCrew crew={crew}/>
                        </div>
                        {/* <div className="movie-similar">
                            <MovieSimilar similar={similar}/>
                        </div> */}

                    </div>
                </div>

                {trailer ?(
                    <ModalVideo 
                        channel='youtube' 
                        autoplay
                        isOpen={isOpen} 
                        videoId= {trailer.trailer[0]?.key}
                        onClose={() => setOpen(false)} />
                    ) :
                    <div>No Trailer</div>
                }
                
            </div>
        </>

    )
}

export default MovieDetail

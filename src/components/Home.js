import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  { loadMovies } from '../actions/moviesAction'
import MovieRow from './MovieRow'
import FeatureMovie from './FeatureMovie'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Footer from './Footer'

//Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const Home = () => {
    
    const dispatch = useDispatch()

    useEffect(()=> {
      dispatch(loadMovies())
      window.scrollTo(0, 0)
    },[dispatch])

    const {topRated, upcoming, nowPlaying, popular, trending} = useSelector((state) => state.movies)

    
    return (
        <>
            <div className="home">
                <FeatureMovie nowPlaying={nowPlaying}/>
                <div className="movie-row-wrapper">
                    <h1 className="movie-row-title">TRENDING</h1>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={6}
                        slidesPerGroup={4}
                        navigation
                        breakpoints={{
                            320: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                                slidesPerGroup: 2
                            },
                            450: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                                slidesPerGroup: 2
                            },
                            600: {
                                slidesPerView: 4,
                                spaceBetween: 15
                            },
                            700: {
                                slidesPerView: 4,
                                spaceBetween: 15
                            },
                            835: {
                                slidesPerView: 5,
                                spaceBetween: 15
                            },
                            975: {
                                slidesPerView: 6,
                                spaceBetween: 15
                            },
                            1100: {
                                slidesPerView: 7,
                                spaceBetween: 15
                            },
                            2000: {
                                slidesPerView: 10,
                                spaceBetween: 15
                            },
                            2400: {
                                slidesPerView: 12,
                                spaceBetween: 15
                            }
                        }}
                    >
                        {trending.filter(movie => movie.poster_path).map((movie, index) => (
                            <SwiperSlide key={index}>
                                <MovieRow key={index} posterPath={movie.poster_path} id={movie.id}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="movie-row-wrapper">
                    <h1 className="movie-row-title">POPULAR</h1>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={6}
                        slidesPerGroup={4}
                        navigation
                        breakpoints={{
                            320: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                                slidesPerGroup: 2
                            },
                            450: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                                slidesPerGroup: 2
                            },
                            600: {
                                slidesPerView: 4,
                                spaceBetween: 15
                            },
                            700: {
                                slidesPerView: 4,
                                spaceBetween: 15
                            },
                            835: {
                                slidesPerView: 5,
                                spaceBetween: 15
                            },
                            975: {
                                slidesPerView: 6,
                                spaceBetween: 15
                            },
                            1100: {
                                slidesPerView: 7,
                                spaceBetween: 15
                            },
                            2000: {
                                slidesPerView: 10,
                                spaceBetween: 10
                            },
                            2400: {
                                slidesPerView: 12,
                                spaceBetween: 15
                            }
                        }}
                        
                    >
                        {popular.filter(movie => movie.poster_path).map((movie, index) => (
                            <SwiperSlide key={index}>
                                <MovieRow key={index} posterPath={movie.poster_path} id={movie.id}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="movie-row-wrapper">
                    <h1 className="movie-row-title">UPCOMING</h1>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={6}
                        slidesPerGroup={4}
                        navigation
                        breakpoints={{
                            320: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                                slidesPerGroup: 2
                            },
                            450: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                                slidesPerGroup: 2
                            },
                            600: {
                                slidesPerView: 4,
                                spaceBetween: 15
                            },
                            700: {
                                slidesPerView: 4,
                                spaceBetween: 15
                            },
                            835: {
                                slidesPerView: 5,
                                spaceBetween: 15
                            },
                            975: {
                                slidesPerView: 6,
                                spaceBetween: 15
                            },
                            1100: {
                                slidesPerView: 7,
                                spaceBetween: 15
                            },
                            2000: {
                                slidesPerView: 10,
                                spaceBetween: 10
                            },
                            2400: {
                                slidesPerView: 12,
                                spaceBetween: 15
                            }
                        }}
                        
                    >
                        {upcoming.filter(movie => movie.poster_path).map((movie, index) => (
                            <SwiperSlide key={index}>
                                <MovieRow key={index} posterPath={movie.poster_path} id={movie.id}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="movie-row-wrapper">
                    <h1 className="movie-row-title">TOP RATED</h1>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={6}
                        slidesPerGroup={4}
                        navigation
                        breakpoints={{
                            320: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                                slidesPerGroup: 2
                            },
                            450: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                                slidesPerGroup: 2
                            },
                            600: {
                                slidesPerView: 4,
                                spaceBetween: 15
                            },
                            700: {
                                slidesPerView: 4,
                                spaceBetween: 15
                            },
                            835: {
                                slidesPerView: 5,
                                spaceBetween: 15
                            },
                            975: {
                                slidesPerView: 6,
                                spaceBetween: 15
                            },
                            1100: {
                                slidesPerView: 7,
                                spaceBetween: 15
                            },
                            2000: {
                                slidesPerView: 10,
                                spaceBetween: 10
                            },
                            2400: {
                                slidesPerView: 12,
                                spaceBetween: 15
                            }
                        }}
                    >
                        {topRated.filter(movie => movie.poster_path).map((movie, index) => (
                            <SwiperSlide key={index}>
                                <MovieRow key={index} posterPath={movie.poster_path} id={movie.id}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Home

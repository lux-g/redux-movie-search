import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import movieLogo from '../images/movie.png'
import { fetchSearch } from '../actions/moviesAction'
import { useDispatch } from 'react-redux'


const Nav = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const [query, setQuery] = useState("")


    //direct to search page
    const handleChange = () => {
        if(query.length <= 1) {
            //sends state to search component
            history.push("/")
        } else {
            history.push("/search")
            return;
        }
    }

    //stores query to redux state, runs handleChange function
    const submitSearch = (e) => {
        e.preventDefault()
        dispatch(fetchSearch(query))
        setQuery("")
        handleChange()
    }

    //sets value to what is typed
    const handleSearch = (e) => {
        setQuery(e.target.value)
    }


    //handles background of nav
    const [showNav, handleshowNav] = useState(false)

    //when scrolling navbar background changes color
    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            window.scrollY >= 80 ?
            handleshowNav(true) :
            handleshowNav(false)
        })
    }, [])

    return (
        <div className={`nav ${showNav && "nav-color"}`}>
            <div className="nav__left-nav">
                <Link to="/">
                    <img src={movieLogo} alt="film logo" />
                </Link>
            </div>
            <div className="nav__right-nav">
                <form onSubmit={submitSearch}>
                    <input onChange={handleSearch} type="text" placeholder="Search movie" value={query}/>
                    <BsSearch className="search-icon"/>
                </form>
            </div>
        </div>
    )
}

export default Nav

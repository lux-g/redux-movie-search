import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaTwitch, FaTwitterSquare, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="icons">
                    <FaFacebookSquare className="fa-icon"/>
                    <FaInstagramSquare className="fa-icon"/>
                    <FaTwitch className="fa-icon"/>
                    <FaTwitterSquare className="fa-icon"/>
                    <FaYoutube className="fa-icon"/>
                </div>
                <p>©2021 Made with ❤️ by Marc Trojanowski</p>
            </div>
        </footer>
    )
}

export default Footer

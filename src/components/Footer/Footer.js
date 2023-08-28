import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <a href="index.html">
                    <img src="Logo2.png" alt="logo" width="250px" height="250px" />
                </a>
                <div className='explore'>
                    <h4>EXPLORE</h4>
                    <div>
                        <ul id="links" >
                            <li>
                                <a href="index.html">HOME</a>
                            </li>
                            <li>
                                <a href="index.html">OFFERINGS</a>
                            </li>
                            <li>
                                <a href="index.html">ABOUT</a>
                            </li>
                            <li>
                                <a href="index.html">WHAT'S NEW?</a>
                            </li>
                            <li>
                                <a href="index.html">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='Copyright'>
                <h6>COPYRIGHT 2020 AGILESATTVA</h6>
                <div className='handle'>
                    <a href="https://www.facebook.com/learnbuildteach/"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="1x" />
                    </a>
                    <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} size="1x" />
                    </a>
                    <a href="https://www.instagram.com/learnbuildteach"
                        className="linkedin">
                        <FontAwesomeIcon icon={faLinkedin} size="1x" />
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
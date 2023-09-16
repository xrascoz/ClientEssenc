import React from 'react'
import logo from "../../assets/imgs/logo/logo.png"
import googlePlay from "../../assets/imgs/icon/Google Play.svg"
import instagram from '../../assets/imgs/icon/instagram.svg'
import youtube from '../../assets/imgs/icon/youtube.svg'
import linkedinIn from '../../assets/imgs/icon/linkedin-in.svg'
import facebook from '../../assets/imgs/icon/facebook-f.svg'
import twitter from '../../assets/imgs/icon/twitter.svg'
import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer>
            <div className='container' >

                <div className='logo-footer-div' >
                    <a className='a-logo' href='#'>   <img src={logo} alt='logo-img' /></a>

                    <button className='button googlePlay-button' >
                        <img src={googlePlay}  alt='googlePlay-img' />
                    </button>

                </div>
                <p className='about-p-footer'>At Essence of Being, we are firmly committed to nurturing lasting and positive transformation in your life. Depend on us as your allies in facilitating growth, fostering transformation, and promoting enduring well-being. Take the first step towards securing your transformative journey by connecting with us today.</p>
                <ul className="list-website-footer">  <li >
                    <Link to="/"> Home</Link>
                </li>
                    <li >
                        <Link to="our-services"> Our services</Link>
                    </li>
                    <li >
                        <Link to="review"> Review</Link>
                    </li>
                    <li >
                        <Link to="blog"> Blog</Link>
                    </li>
                    <li >
                        <Link to="contact"> Contact</Link>
                    </li>
                    <li >
                        <Link to="book-now"> Book now</Link>
                    </li>
                </ul>

                <div className='the-end-of-footer' >
                    <p>Copyright © 2023 ❤ Essence Of Being ❤</p>
                    <div className="social-media">
                        <a href="https://www.facebook.com" target="_blank">
                            <img src={facebook} alt="icon" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank">
                            <img src={instagram} alt="icon" />
                        </a>

                        <a href="https://www.youtube.com" target="_blank">
                            <img src={youtube} alt="icon" />
                        </a>

                        <a href="https://www.linkedin.com" target="_blank">
                            <img src={linkedinIn} alt="icon" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank">
                            <img src={twitter} alt="icon" />
                        </a>
                    </div>
                </div>


            </div>


        </footer>
    )
}

export default Footer
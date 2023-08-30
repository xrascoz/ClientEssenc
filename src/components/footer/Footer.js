import React from 'react'
import logo from "../../assets/imgs/logo/logo.png"
import logo2 from "../../assets/imgs/logo/logo2.png"
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
                    <a className='a-logo'>   <img src={logo} /></a>

                    <button className='button' >
                        <img src={googlePlay} />
                    </button>

                </div>
                <p className='about-p-footer'>Launch your own Software As A Service Application with Flex Solutions. Launch your own Software As A Service Application with Flex Solutions.        </p>
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
                    <p>© 2021 Essence . All rights reserved.</p>
                    <div className="social-media">
                        <a href="https://www.facebook.com/xrascoz/" target="_blank">
                            <img src={facebook} alt="icon" />
                        </a>
                        <a href="https://www.instagram.com/xrascoz/" target="_blank">
                            <img src={instagram} alt="icon" />
                        </a>

                        <a href="https://www.youtube.com/@xrascoz" target="_blank">
                            <img src={youtube} alt="icon" />
                        </a>

                        <a href="https://www.linkedin.com/in/xrascoz/" target="_blank">
                            <img src={linkedinIn} alt="icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/xrascoz/" target="_blank">
                            <img src={twitter} alt="icon" />
                        </a>
                    </div>
                </div>


            </div>


        </footer>
    )
}

export default Footer
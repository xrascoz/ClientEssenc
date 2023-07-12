import React from 'react'
import logo from "../../assets/imgs/logo/logo.png"
import googlePlay from "../../assets/imgs/icon/Google Play.svg"
import instagram from '../../assets/imgs/icon/instagram.svg'
import youtube from '../../assets/imgs/icon/youtube.svg'
import linkedinIn from '../../assets/imgs/icon/linkedin-in.svg'
import facebook from '../../assets/imgs/icon/facebook-f.svg'
import twitter from '../../assets/imgs/icon/twitter.svg'

function Footer() {
    return (
        <footer>
            <div className='container' >

                <div className='logo-footer-div' >
                 <a className='a-logo'>   <img src={logo}  /></a>

                    <button className='button' >
                        <img src={googlePlay} />
                    </button>

                </div>
                <p  className='about-p-footer'>Launch your own Software As A Service Application with Flex Solutions. Launch your own Software As A Service Application with Flex Solutions.        </p>
                <ul class="list-website">
                    <li class="list-ul-phone">
                        <a href="/"> Home</a>
                    </li>
                    <li class="list-ul-phone">
                        <a href="/our_services"> Our services</a>
                    </li>
                    <li class="list-ul-phone">
                        <a href="/review"> Review</a>
                    </li>
                    <li class="list-ul-phone">
                        <a href="/blog"> Blog</a>
                    </li>
                    <li class="list-ul-phone">
                        <a href="/contact"> Contact</a>
                    </li>
                    <li class="list-ul-phone">
                        <a href="/book"> Book now</a>
                    </li>
                    <li class="li-login">
                        <a class="a-login" href="/login">
                            <span class="login-span">Login</span>
                        </a>
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
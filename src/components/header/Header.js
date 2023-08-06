import React from 'react'
import logo from "../../assets/imgs/logo/logo.png"
import logo2 from "../../assets/imgs/logo/logo2.png"

import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie"
import axios from 'axios'
import UserToggle from '../../user/components/userToggle/UserToggle';
import AdminToggle from '../../admin/components/userToggle/UserToggle';

import profileImg from "../../assets/imgs/team/photo.jpg"
import chevronDown from "../../assets/imgs/icon/chevron-down.svg"
import logOutIcon from "../../assets/imgs/icon/arrow-right-from-line.svg"
import settingIcon from "../../assets/imgs/icon/gear.svg"
import dashboard from "../../assets/imgs/icon/widget.svg"
import toggleImg from "../../assets/imgs/icon/toggle.svg"

function Header() {
    let [toggle, setToggle] = useState(false)
    const [cookies, setCookie] = useCookies(['access_token']);
    const [cookiesUser, setCookieUser] = useCookies(['access_token_User']);

    return (
        <header>
            <div className="container">
                <Link to="/" className="a-logo">
                    <img src={logo} alt="logo.png" />
                </Link>
                <ul className="list-website">
                    <li className="list-ul-phone">
                        <Link to="/"> Home</Link>
                    </li>
                    <li className="list-ul-phone">
                        <Link to="our-services"> Our services</Link>
                    </li>
                    <li className="list-ul-phone">
                        <Link to="review"> Review</Link>
                    </li>
                    <li className="list-ul-phone">
                        <Link to="blog"> Blog</Link>
                    </li>
                    <li className="list-ul-phone">
                        <Link to="contact"> Contact</Link>
                    </li>
                    <li className="list-ul-phone">
                        <Link to="book-now"> Book now</Link>
                    </li>
                    <li className="li-login"><Link to="login" className="a-login"><span className="login-span">Login</span></Link></li>
                </ul>

                <div className='toggle-div-parent'>
                    {
                        cookiesUser.access_token_User ?
                            <UserToggle />
                            : cookies.access_token ?
                                <AdminToggle />
                                : <div className="register-div">
                                    <Link className="register login" to="login" > login </Link>
                                    <Link className="register sing-up button" to="sing-up"> sing up</Link>
                                </div>
                    }



                    <img src={toggleImg} alt="bars-sort.svg" className="icon toggle" />

                </div>
            </div>
        </header>
    )
}

export default Header
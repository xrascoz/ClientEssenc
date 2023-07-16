import React from 'react'
import logo from "../../assets/imgs/logo/logo.png"
import logo2 from "../../assets/imgs/logo/logo2.png"

import {  Link } from "react-router-dom";


function Header() {
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

                <div className="register-div">
                    <Link className="register login" to="login" > login </Link>
                    <Link className="register sing-up button" to="sing-up"> sing up</Link>
                    <img src="assets/img/icons/bars-sort.svg" alt="bars-sort.svg" className="icon toggle" />
                </div>
            </div>
        </header>
    )
}

export default Header
import React from 'react'
import logo from "../../assets/imgs/logo/logo.png"
import logoIcon from "../../assets/imgs/logo/logo icon .png"

import { useState } from 'react';
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie"
import UserToggle from '../../user/components/userToggle/UserToggle';
import AdminToggle from '../../admin/components/userToggle/UserToggle';


import toggleImg from "../../assets/imgs/icon/toggle.svg"

function Header() {


    
    let [toggle, setToggle] = useState(false)
    const [cookies, setCookie] = useCookies(['access_token']);
    const [cookiesUser, setCookieUser] = useCookies(['access_token_User']);


    let toggleFunc = () => {
        setToggle(!toggle)
    }




    return (
        <div>
            <header>
                <div className="container">
                    <Link to="/" className="a-logo">
                        <img src={logo} className='logo-header' alt="logo.png" />
                        <img src={logoIcon} className='logo-icon-header' alt="logo.png" />
                    </Link>
                    <ul className="list-website">
                        <li >
                            <Link to="/"> Home</Link>
                        </li>
                        <li >
                            <Link to="our-services"> Our services</Link>
                        </li>
                        <li >
                            <Link to="review"> Review</Link>
                        </li>
                        <li >
                            <Link to="project"> Our Project</Link>
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
                        <li className="li-login"><Link to="login" className="a-login"><span className="login-span">Login</span></Link></li>
                    </ul>
                    <div className='toggle-div-parent'>
                        {
                            cookiesUser.access_token_User ?
                                <UserToggle />
                                : cookies.access_token ?
                                    <AdminToggle />
                                    : <div className="register-div">
                                        <Link className="register login" to="/login" onClick={toggleFunc} > login </Link>
                                        <Link className="register sing-up button" to="/sing-up" onClick={toggle ? toggleFunc : false}> sing up</Link>
                                    </div>
                        }
                        <div className='toggle-div' onClick={(e) => setToggle(!toggle)} >
                            <img src={toggleImg} alt="bars-sort.svg" className="icon toggle" />
                        </div>
                    </div>
                </div>
            </header>
            <div className='phone-header' >
                <ul className={toggle ? "list-website active" : "list-website"}>
                    <li className="list-ul-phone" onClick={toggleFunc} >
                        <Link to="/"> Home</Link>
                    </li>
                    <li className="list-ul-phone" onClick={toggleFunc}  >
                        <Link to="our-services"> Our services</Link>
                    </li>
                    <li className="list-ul-phone" onClick={toggleFunc} >
                        <Link to="review"> Review</Link>
                    </li>
                    <li className="list-ul-phone" onClick={toggleFunc} >
                        <Link to="blog"> Blog</Link>
                    </li>
                    <li className="list-ul-phone" onClick={toggleFunc} >
                        <Link to="contact"> Contact</Link>
                    </li>
                    <li className="list-ul-phone" onClick={toggleFunc} >
                        <Link to="book-now"> Book now</Link>
                    </li>
                    <li className="li-login" onClick={toggleFunc} ><Link to="/login" className="a-login"><span className="login-span">Login</span></Link></li>
                </ul>
            </div>

        </div>

    )
}

export default Header
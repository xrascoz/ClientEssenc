import React from 'react'
import img from "../../../assets/imgs/icon/circle-info.svg"
import ClipboardCheck from "../../../assets/imgs/icon/Clipboard Check.svg"
import ClipboardRemove from "../../../assets/imgs/icon/Clipboard Remove.svg"
import DocumentText from "../../../assets/imgs/icon/Document Text.svg"
import { NavLink } from 'react-router-dom'
import logo from "../../../assets/imgs/logo/logo.png"
import logo2 from "../../../assets/imgs/logo/logo2.png"

import { useEffect, useState } from 'react'

function Navpar() {

    let [userId, setUserId] = useState("")

    useEffect(() => {
        setUserId(localStorage.getItem("userId"))
    }, [])



    return (

        <div className="nav-par-side">

            <NavLink to="/" className="a-logo a-logo-dashboard">
                <img src={logo2} alt="logo.png" />
            </NavLink>

            <ul className="nav-sec nav-home-sec">
                <li>
                    <NavLink aria-label="Rasco-Borma" to={`/user/appointment/${userId}`} >
                        <img className="svg-icon-header" src={DocumentText}
                            alt="icon-house-home" className='icon' />
                        Appointment
                    </NavLink>
                </li>
                <li>
                    <NavLink aria-label="Rasco-Borma" to={`/user/appointment-end/${userId}`} >
                        <img className="svg-icon-header" src={ClipboardCheck}
                            alt="icon-house-home" className='icon' />
                        Appointment End
                    </NavLink>
                </li>
                <li>
                    <NavLink aria-label="Rasco-Borma" to="/book-now" >
                        <img className="svg-icon-header" src={ClipboardCheck}
                            alt="icon-house-home" className='icon' />
                        New appointment
                    </NavLink>
                </li>


            </ul>
        </div>
    )
}

export default Navpar
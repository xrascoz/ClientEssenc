import React from 'react'

import { NavLink } from 'react-router-dom'
import logo from "../../../assets/imgs/logo/logo.png"
import logo2 from "../../../assets/imgs/logo/logo2.png"


import calendar from "../../../assets/imgs/icon/calendar.svg"
import calendarEnd from "../../../assets/imgs/icon/calendarend.svg"
import calendarNew from "../../../assets/imgs/icon/calendarNew.svg"

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
                    <NavLink aria-label="Nav Link" to={`/user/appointment/${userId}`} >
                        <div className='list-icon' >
                            <img className="svg-icon-header icon" src={calendar}
                                alt="icon-house-home" />
                            Appointment
                        </div>

                    </NavLink>
                </li>
                <li>
                    <NavLink aria-label="Nav Link" to={`/user/appointment-end/${userId}`} >
                        <div className='list-icon' >

                            <img className="svg-icon-header icon" src={calendarEnd}
                                alt="icon-house-home" />
                            Appointment End
                        </div>

                    </NavLink>
                </li>
                <li>
                    <NavLink aria-label="Nav Link" to="/book-now" >
                        <div className='list-icon' >

                            <img className="svg-icon-header icon" src={calendarNew}
                                alt="icon-house-home" />
                            New appointment
                        </div>

                    </NavLink>
                </li>


            </ul>
        </div>
    )
}

export default Navpar
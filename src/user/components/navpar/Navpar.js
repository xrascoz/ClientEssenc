import React from 'react'

import { NavLink } from 'react-router-dom'
import logo2 from "../../../assets/imgs/logo/logo2.png"


import calendar from "../../../assets/imgs/icon/calendar.svg"
import calendarEnd from "../../../assets/imgs/icon/calendarend.svg"
import calendarNew from "../../../assets/imgs/icon/calendarNew.svg"

import { useEffect, useState } from 'react'

// import { BASE_URL } from '../../../server/server'
import axios from 'axios'

function Navpar() {
    let BASE_URL = process.env.REACT_APP_API_LINK
    let [userId, setUserId] = useState("")
    useEffect(() => {
        setUserId(localStorage.getItem("userId"))
    }, [])
    let [appointmentAvailable, setAppointmentAvailable] = useState(0)
    useEffect(() => {
        axios.get(`${BASE_URL}/api/appointment`).then(response => {
            setAppointmentAvailable(response.data.filter(item => item.booked === false).length);
        });
    }, []);
    let [appointmentsState, setAppointments] = useState([])
    let [appointmentsStateFalse, setAppointmentsFalse] = useState([])

    let appointmentsLength = appointmentsState.length || 0
    let appointmentsLengthFalse = appointmentsStateFalse.length || 0

    useEffect(() => {
        let userId = localStorage.getItem("userId")
        axios.get(`${BASE_URL}/api/user/${userId}`).then(response => {
            setAppointments(response.data.appointments.filter(item => item.booked === true && item.available === true))
            setAppointmentsFalse(response.data.appointments.filter(item => item.booked === true && item.available === false))
        })
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
                        <span>{appointmentsLength}</span>
                      
                    </NavLink>
                </li>
                <li>
                    <NavLink aria-label="Nav Link" to={`/user/appointment-end/${userId}`} >
                        <div className='list-icon' >
                            <img className="svg-icon-header icon" src={calendarEnd}
                                alt="icon-house-home" />
                            Appointment End
                        </div>
                        <span>{appointmentsLengthFalse}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink aria-label="Nav Link" to="/book-now" >
                        <div className='list-icon' >
                            <img className="svg-icon-header icon" src={calendarNew}
                                alt="icon-house-home" />
                            New appointment
                        </div>
                        <span>{appointmentAvailable}</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navpar
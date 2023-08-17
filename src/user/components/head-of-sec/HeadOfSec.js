import React from 'react'
import img from "../../../assets/imgs/icon/check.svg"
import ClipboardCheck from "../../../assets/imgs/icon/Clipboard Check.svg"
import ClipboardRemove from "../../../assets/imgs/icon/Clipboard Remove.svg"
import DocumentText from "../../../assets/imgs/icon/Document Text.svg"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import {BASE_URL} from "../../../server/server"

function HeadOfSec({ appointmentsLength, appointmentsLengthFalse }) {



    let [userId, setUserId] = useState("")

    useEffect(() => {
        setUserId(localStorage.getItem("userId"))
    }, [])

    let [appointmentAvailable, setAppointmentAvailable] = useState("")


    useEffect(() => {
        axios.get(`${BASE_URL}/api/appointment`).then(response => {
            setAppointmentAvailable(response.data.filter(item => item.booked === false).length);
        });
    }, []);


    return (
        <div className='head-of-sec-parent' >
          
            <div className='head-of-sec-card' >
                <Link to={`/user/appointment/${userId}`} className='card-head'    >
                    <p className='p-name'>Appointment</p>
                    <div className='div-number-card-dashboard-icon'>
                        <div className='number-line' >
                            <h2>
                                {appointmentsLength}
                            </h2>
                            <span className='line-span' ></span>
                        </div>
                        <img src={DocumentText} alt='icon' className='icon' />
                    </div>
                </Link>
                <Link to={`/user/appointment-end/${userId}`} className='card-head' >
                    <p className='p-name'>Appointment End</p>
                    <div className='div-number-card-dashboard-icon'>
                        <div className='number-line' >
                            <h2>
                                {appointmentsLengthFalse}
                            </h2>
                            <span className='line-span'></span>
                        </div>
                        <img src={ClipboardRemove} alt='icon' className='icon' />
                    </div>
                </Link>
                <Link to="/book-now" className='card-head' >
                    <p className='p-name'>New appointment </p>
                    <div className='div-number-card-dashboard-icon'>
                        <div className='number-line' >
                            <h2>
                                {appointmentAvailable}
                            </h2>
                            <span className='line-span' ></span>
                        </div>
                        <img src={ClipboardCheck} alt='icon' className='icon' />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HeadOfSec
import React from 'react'
import ClipboardCheck from "../../../assets/imgs/icon/Clipboard Check.svg"
import ClipboardRemove from "../../../assets/imgs/icon/Clipboard Remove.svg"
import DocumentText from "../../../assets/imgs/icon/Document Text.svg"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function HeadOfSec() {

    let BASE_URL = process.env.REACT_APP_API_LINK

    let [adminId, setAdminId] = useState("")

    useEffect(() => {
        setAdminId(localStorage.getItem("adminId"))
    }, [])

    let [appointmentAvailable, setAppointmentAvailable] = useState(0)

    useEffect(() => {
        axios.get(`${BASE_URL}/api/appointment`).then(response => {
            setAppointmentAvailable(response.data.filter(item => item.booked === false).length);
        });
    }, []);
    
    let [userAppointments, setUserAppointments] = useState([])

    const totalAppointments = userAppointments.reduce((acc, user) => acc + user.appointments.length, 0);

    const totalAvailableAppointments = userAppointments.reduce((acc, user) => {
        return acc + user.appointments.filter(appointment => appointment.available).length;
    }, 0);

    useEffect(() => {
        axios.get(`${BASE_URL}/api/user`)
            .then(response => {
                const usersData = response.data;
                const filteredUsers = usersData.filter(userAvi => userAvi.appointments && userAvi.appointments.length > 0);
                setUserAppointments(filteredUsers);
            })
            .catch(error => {
                console.error('error', error);
            });
    }, []);



    return (
        <div className='head-of-sec-parent' >
            <div className='head-of-sec-card' >
                <Link to={`/admin/appointment/${adminId}`} className='card-head'    >
                    <p className='p-name'>Appointment</p>
                    <div className='div-number-card-dashboard-icon'>
                        <div className='number-line' >
                            <h2>
                                {totalAvailableAppointments}
                            </h2>
                            <span className='line-span' ></span>
                        </div>
                        <img src={DocumentText} alt='icon' className='icon' />
                    </div>
                </Link>
                <Link to={`/admin/appointment-end/${adminId}`} className='card-head' >
                    <p className='p-name'>Appointment End</p>
                    <div className='div-number-card-dashboard-icon'>
                        <div className='number-line' >
                            <h2>
                                {totalAppointments}
                            </h2>
                            <span className='line-span'></span>
                        </div>
                        <img src={ClipboardRemove} alt='icon' className='icon' />
                    </div>
                </Link>
                <Link to={`/admin/add-new-date/${adminId}`} className='card-head' >
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
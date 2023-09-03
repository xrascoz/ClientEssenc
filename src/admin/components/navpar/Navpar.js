import React from 'react'
import calendar from "../../../assets/imgs/icon/calendar.svg"
import calendarEnd from "../../../assets/imgs/icon/calendarend.svg"
import calendarNew from "../../../assets/imgs/icon/calendarNew.svg"
import blogIcon from "../../../assets/imgs/icon/blog.svg"
import chatIcon from "../../../assets/imgs/icon/chat.svg"
import couponIcon from "../../../assets/imgs/icon/coupon.svg"
import projectIcon from "../../../assets/imgs/icon/Window Frame.svg"


import { NavLink } from 'react-router-dom'
import logo2 from "../../../assets/imgs/logo/logo2.png"
import { useEffect, useState } from 'react'
// import { BASE_URL } from "../../../server/server"
import axios from 'axios'

function Navpar() {

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
                console.error('An error occurred while retrieving data:', error);
            });
    }, []);



    let [dataBlog, setDataBlog] = useState(0)
    useEffect(() => {
        axios.get(`${BASE_URL}/api/blog`).then((response) => {
            setDataBlog(response.data.length)
        })
    }, [])

    let [dataProject, setDataProject] = useState(0)
    useEffect(() => {
        axios.get(`${BASE_URL}/api/project`).then((response) => {
            setDataProject(response.data.length)
        })
    }, [])


    let [dataMessage, setDataMessage] = useState(0)
    useEffect(() => {
        axios.get(`${BASE_URL}/api/contact`).then((response) => {
            setDataMessage(response.data.length);
        })
    }, [])

    let [userAppointmentsCoupon, setUserAppointmentsCoupon] = useState(0)



    let userAppointmentsCouponLenght = userAppointmentsCoupon.length || 0


    
    useEffect(() => {
        axios.get(`${BASE_URL}/api/company`)
            .then(response => {
                const usersData = response.data;
                const filteredUsers = usersData.filter(userAvi => userAvi.availableAppointment.length > 0);
                setUserAppointmentsCoupon(filteredUsers);
            })

            .catch(error => {
                console.error(error);
            });
    }, []);


    return (
        <div className="nav-par-side">
            <NavLink to="/" className="a-logo a-logo-dashboard">
                <img src={logo2} alt="logo.png" />
            </NavLink>
            <ul className="nav-sec nav-home-sec">
                <li>
                    <NavLink aria-label="Nav Link" to={`/admin/appointment/${adminId}`} >
                        <div className='list-icon' >
                            <img className="svg-icon-header icon" src={calendar}
                                alt="icon-house-home" />
                            Appointment
                        </div>
                        <span>{totalAvailableAppointments}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink aria-label="Nav Link" to={`/admin/appointment-end/${adminId}`} >
                        <div className='list-icon' >
                            <img className="svg-icon-header icon" src={calendarEnd}
                                alt="icon-house-home" />
                            Appointment End
                        </div>
                        <span>{totalAppointments}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink aria-label="Nav Link" to={`/admin/add-new-date/${adminId}`} >
                        <div className='list-icon' >
                            <img className="svg-icon-header icon" src={calendarNew}
                                alt="icon-house-home" />
                            New appointment
                        </div>
                        <span>{appointmentAvailable}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink aria-label="Nav Link" to={`/admin/coupon/${adminId}`} >
                        <div className='list-icon' >
                            <img className="svg-icon-header icon" src={couponIcon}
                                alt="icon-house-home" />
                            coupon
                        </div>
                        <span>{userAppointmentsCouponLenght}</span>
                    </NavLink>
                </li>
                
                <li>
                    <NavLink aria-label="Nav Link" to={`/admin/message/${adminId}`} >
                        <div className='list-icon' >
                            <img className="svg-icon-header icon" src={chatIcon}
                                alt="icon-house-home" />
                            message
                        </div>
                        <span>{dataMessage}</span>
                    </NavLink>
                </li>
              
                <li>
                    <NavLink aria-label="Nav Link" to={`/admin/add-new-blog/${adminId}`} >
                        <div className='list-icon' >
                            <img className="svg-icon-header icon" src={blogIcon}
                                alt="icon-house-home" />
                            Add new blog
                        </div>
                        <span>{dataBlog}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink aria-label="Nav Link" to={`/admin/add-new-project/${adminId}`} >
                        <div className='list-icon' >
                            <img className="svg-icon-header icon" src={projectIcon}
                                alt="icon-house-home" />
                            Add new project
                        </div>
                        <span>{dataProject}</span>
                    </NavLink>
                </li>

            </ul>
        </div>
    )
}

export default Navpar
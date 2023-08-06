import React from 'react'
import Navpar from '../../components/navpar/Navpar'
import Header from '../../components/header/Header';
import HeadOfSec from '../../components/head-of-sec/HeadOfSec';
import Card from './AppointmentComp/Card';


import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie"
import axios from 'axios'

function AppointmentUser() {

    let [user, setUser] = useState({})
    let [appointmentsState, setAppointments] = useState([])
    let [appointmentsStateFalse, setAppointmentsFalse] = useState([])
    let appointmentsLength = appointmentsState.length
    let appointmentsLengthFalse = appointmentsStateFalse.length
    
    let { fullName, img, _id, appointments } = user

    useEffect(() => {
        let userId = localStorage.getItem("userId")
        axios.get(`http://localhost:5000/api/user/${userId}`).then(response => {
            setUser(response.data);
            setAppointments(response.data.appointments.filter(item => item.booked === true && item.available === true ))
            setAppointmentsFalse(response.data.appointments.filter(item => item.booked === true && item.available === false ))
        })
    }, [])
    
    
    return (
        <div className='grid-dashboard'>
            <Navpar />
            <div className='content-dashboard' >
                <Header  />
                <HeadOfSec user={user} appointmentsLength={appointmentsLength} appointmentsLengthFalse={appointmentsLengthFalse} />
                <div className='grid-card-dashboard' >
                    {
                        appointmentsStateFalse.map(appointments => {
                            return (
                                <Card appointments={appointments} key={appointments._id} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AppointmentUser
import React from 'react'
import Navpar from '../../components/navpar/Navpar'
import Header from '../../components/header/Header';
import HeadOfSec from '../../components/head-of-sec/HeadOfSec';
import Card from './AppointmentComp/Card';
import NotFound from '../../../page/not-found/NotFound';

import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie"
import axios from 'axios'

import { BASE_URL } from "../../../server/server"

function AppointmentUser() {

    let [user, setUser] = useState({})
    let [appointmentsState, setAppointments] = useState([])
    let [appointmentsStateFalse, setAppointmentsFalse] = useState([])
    let appointmentsLength = appointmentsState.length
    let appointmentsLengthFalse = appointmentsStateFalse.length

    let { fullName, img, _id, appointments } = user

    useEffect(() => {
        let userId = localStorage.getItem("userId")
        axios.get(`${BASE_URL}/api/user/${userId}`).then(response => {
            setUser(response.data);
            setAppointments(response.data.appointments.filter(item => item.booked === true && item.available === true))
            setAppointmentsFalse(response.data.appointments.filter(item => item.booked === true && item.available === false))
        })
    }, [])




    let buttonNotFoundTittle = "add Appointment"
    let pNotFound = "the all of Appointment are booked Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of    "
    let LinkTo = "/book-now"

    return (
        <div className='grid-dashboard'>
            <Navpar />
            <div className='content-dashboard' >
                <Header />
                <HeadOfSec user={user} appointmentsLength={appointmentsLength} appointmentsLengthFalse={appointmentsLengthFalse} />

                {appointmentsLength > 0 ? (
                    <div className='grid-card-dashboard' >
                        {
                            appointmentsState.map(appointments => {
                                return (
                                    <Card appointments={appointments} key={appointments._id} />
                                )
                            })
                        }
                    </div>
                ) : (
                    <div>
                        <NotFound buttonNotFoundTittle={buttonNotFoundTittle} LinkTo={LinkTo} pNotFound={pNotFound} />
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default AppointmentUser
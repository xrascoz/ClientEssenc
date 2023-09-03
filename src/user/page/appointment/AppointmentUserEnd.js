import React from 'react'
import Card from './AppointmentComp/Card';
import NotFound from '../../../page/not-found/NotFound';

import { useState, useEffect } from 'react';
import axios from 'axios'

// import { BASE_URL } from "../../../server/server"

function AppointmentUser() {
    let BASE_URL = process.env.REACT_APP_API_LINK
   
    let [appointmentsStateFalse, setAppointmentsFalse] = useState([])
    let appointmentsLengthFalse = appointmentsStateFalse.length

    useEffect(() => {
        let userId = localStorage.getItem("userId")
        axios.get(`${BASE_URL}/api/user/${userId}`).then(response => {
            setAppointmentsFalse(response.data.appointments.filter(item => item.booked === true && item.available === false))
        })
    }, [])


    let buttonNotFoundTittle = "add Appointment"
    let pNotFound = "the all of Appointment are booked Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of    "
    let LinkTo = "/book-now"

    return (
        <div>

            <div className='content-dashboard' >
                {appointmentsLengthFalse > 0 ? (
                    <div>
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
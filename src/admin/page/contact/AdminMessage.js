import React from 'react'
import Navpar from '../../components/navpar/Navpar'
import Header from '../../components/header/Header';
import HeadOfSec from '../../components/head-of-sec/HeadOfSec';
import MessageCard from "../contact/contactComp/MessageCard"

import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie"
import axios from 'axios'

function AdminMessage() {

    let [dataMessage, setDataMessage] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/api/contact").then((response) => {
            setDataMessage(response.data.reverse());
        })
    }, [])


    
    let [updateUi, setUpdateUi] = useState(false)
    const [appointmentsAvil, setAppointmentsAvil] = useState([]);
    console.log(appointmentsAvil)

    let [admin, setAdmin] = useState({})
    let [appointmentsState, setAppointments] = useState([])

    let [appointmentsStateFalse, setAppointmentsFalse] = useState([])
    let appointmentsLength = appointmentsState.length
    let appointmentsLengthFalse = appointmentsStateFalse.length

    let [userAppointments, setUserAppointments] = useState([])
    console.log(userAppointments)
    // console.log(user)

    let { fullName, img, _id, appointments } = admin

    useEffect(() => {
        // استرجاع بيانات المستخدمين من API
        axios.get('http://localhost:5000/api/user')
            .then(response => {
                const usersData = response.data;
                const filteredUsers = usersData.filter(userAvi => userAvi.appointments && userAvi.appointments.length > 0  );
                setUserAppointments(filteredUsers);
            })

            .catch(error => {
                console.error('حدث خطأ في استرجاع البيانات:', error);
            });
    }, [updateUi]);




    return (


        <div className='grid-dashboard'>
            <Navpar />
            <div className='content-dashboard' >
                <Header />
                <HeadOfSec user={admin} appointmentsLength={appointmentsLength} appointmentsLengthFalse={appointmentsLengthFalse} />
                <div className='grid-card-dashboard' >

                    {
                        dataMessage.map((data) => {
                            return (
                                <MessageCard data={data} key={data._id} key={data._id} />
                            )
                        })
                    }

                </div>
            </div>
        </div>



    )
}

export default AdminMessage
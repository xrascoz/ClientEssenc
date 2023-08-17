import React from 'react'
import Navpar from '../../components/navpar/Navpar'
import Header from '../../components/header/Header';
import HeadOfSec from '../../components/head-of-sec/HeadOfSec';
import MessageCard from "../contact/contactComp/MessageCard"
import {BASE_URL} from "../../../server/server"

import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie"
import axios from 'axios'

import ErrorAlert from '../../../components/alertCopm/ErrorAlert';
import SuccessAlert from '../../../components/alertCopm/SuccessAlert'

function AdminMessage() {



    let [successAlertMessage, setSuccessAlertMessage] = useState("")
    let [toggleAlertSucsses, setToggleAlertSucsses] = useState(false)

    let [errorAlertMessage, setErrorAlertMessage] = useState("")
    let [toggleAlertError, setToggleAlertError] = useState(false)


    let [dataMessage, setDataMessage] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/api/contact`).then((response) => {
            setDataMessage(response.data.reverse());
        })
    }, [])


    
    let [updateUi, setUpdateUi] = useState(false)


    let [admin, setAdmin] = useState({})
    let [appointmentsState, setAppointments] = useState([])

    let [appointmentsStateFalse, setAppointmentsFalse] = useState([])
    let appointmentsLength = appointmentsState.length
    let appointmentsLengthFalse = appointmentsStateFalse.length

    let [userAppointments, setUserAppointments] = useState([])

    let { fullName, img, _id, appointments } = admin

    useEffect(() => {
        // استرجاع بيانات المستخدمين من API
        axios.get(`${BASE_URL}/api/user`)
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
            
            <ErrorAlert AlertMessage={errorAlertMessage} toggleAlert={toggleAlertError} />
            <SuccessAlert AlertMessage={successAlertMessage} toggleAlert={toggleAlertSucsses} />
            <Navpar />
            <div className='content-dashboard' >
                <Header />
                <HeadOfSec  />
                <div className='grid-card-dashboard' >

                    {
                        dataMessage.map((data) => {
                            return (
                                <MessageCard data={data} key={data._id} setUpdateUi={setUpdateUi}
                                updateUi={updateUi}
                                
                                setSuccessAlertMessage={setSuccessAlertMessage}
                                setToggleAlertSucsses={setToggleAlertSucsses}
                                setErrorAlertMessage={setErrorAlertMessage}
                                setToggleAlertError={setToggleAlertError}

                                />
                            )
                        })
                    }

                </div>
            </div>
        </div>



    )
}

export default AdminMessage
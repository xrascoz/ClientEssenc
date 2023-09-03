import React from 'react'

import MessageCard from "../contact/contactComp/MessageCard"
// import { BASE_URL } from "../../../server/server"

import { useState, useEffect } from 'react';
import axios from 'axios'

import ErrorAlert from '../../../components/alertCopm/ErrorAlert';
import SuccessAlert from '../../../components/alertCopm/SuccessAlert'

function AdminMessage() {

    let BASE_URL = process.env.REACT_APP_API_LINK

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
    let [userAppointments, setUserAppointments] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/api/user`)
            .then(response => {
                const usersData = response.data;
                const filteredUsers = usersData.filter(userAvi => userAvi.appointments && userAvi.appointments.length > 0);
                setUserAppointments(filteredUsers);
            })

            .catch(error => {
                console.error('error:', error);
            });
    }, [updateUi]);




    return (
        <div className='content-dashboard' >
            <ErrorAlert AlertMessage={errorAlertMessage} toggleAlert={toggleAlertError} />
            <SuccessAlert AlertMessage={successAlertMessage} toggleAlert={toggleAlertSucsses} />
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
    )
}

export default AdminMessage
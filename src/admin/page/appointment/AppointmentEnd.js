import React from 'react'

import Card from './AppointmentComp/CardEnd';
// import { BASE_URL } from "../../../server/server"

import ErrorAlert from '../../../components/alertCopm/ErrorAlert';
import SuccessAlert from '../../../components/alertCopm/SuccessAlert'
import xmark from "../../../assets/imgs/icon/xmark.svg"

import { useState, useEffect } from 'react';
import axios from 'axios'





function AppointmentEnd() {

    let BASE_URL = process.env.REACT_APP_API_LINK
    let [message, setMessage] = useState("")
    let [link, setLink] = useState("")
    let [messageSMS, setMessageSMS] = useState("")

    let [toggle, setToggle] = useState(false)
    let [toggleSms, setToggleSms] = useState(false)

    let [idUser, setIdUser] = useState("")


    let toggleCardPop = (e) => {
        setIdUser(e.currentTarget.getAttribute("idUser"))
        setToggle(!toggle)
    }
    let toggleCardSMS = (e) => {
        setToggleSms(!toggleSms)
    }

    let [successAlertMessage, setSuccessAlertMessage] = useState("")
    let [toggleAlertSucsses, setToggleAlertSucsses] = useState(false)

    let [errorAlertMessage, setErrorAlertMessage] = useState("")
    let [toggleAlertError, setToggleAlertError] = useState(false)

    let messageEmail = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/api/send-email-message/${idUser}`, { message, link }).then((response) => {

            if (response.data.error) {
                setErrorAlertMessage(response.data.error)
                setToggleAlertError(true)
                setTimeout(() => {
                    setToggleAlertError(false)
                }, 5000)

            } else {
                setSuccessAlertMessage(response.data.success)
                setToggleAlertSucsses(true)
                setTimeout(() => {
                    setToggleAlertSucsses(false)
                }, 5000)
                setMessage("")
                setLink("")
                setToggle(false)
            }
        })
    }
    let messageSmsSend = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/api/sms/${idUser}`, { message: messageSMS }).then((response) => {

            if (response.data.error) {
                setErrorAlertMessage(response.data.error)
                setToggleAlertError(true)
                setTimeout(() => {
                    setToggleAlertError(false)
                }, 5000)

            } else {
                setSuccessAlertMessage(response.data.success)
                setToggleAlertSucsses(true)
                setTimeout(() => {
                    setToggleAlertSucsses(false)
                }, 5000)
                setMessageSMS("")
                setToggleSms(!toggle)
            }
        })
    }

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
                console.error('حدث خطأ في استرجاع البيانات:', error);
            });
    }, [updateUi]);
    return (
        <div className='grid-card-dashboard' >

            <ErrorAlert AlertMessage={errorAlertMessage} toggleAlert={toggleAlertError} />
            <SuccessAlert AlertMessage={successAlertMessage} toggleAlert={toggleAlertSucsses} />


            <div className={toggle ? "add-website div-pop active" : "add-website div-pop"} >
                <div className="card-div ">
                    <div className="x-subscribe x-button" onClick={toggleCardPop}>
                        <img src={xmark} alt="xmark.svg" className="icon" />
                    </div>
                    <div className="subscribe-div-text">
                        <h1 className="h1-text "> New message  </h1>
                        <p>add new message for your client</p>
                    </div>
                    <form action="" className="form-subscribe" id="form-subscribe" onSubmit={(e) => messageEmail(e)}>
                        <p className='label-p'>message</p>

                        <textarea id="w3review" name="w3review" rows="3" cols="50" placeholder="type your message here" required value={message} onChange={(e) => setMessage(e.target.value)} />
                        <p className='label-p'  >link</p>
                        <input type="text" placeholder="type your link here" required value={link} onChange={(e) => setLink(e.target.value)} />

                        <button className="button-form" >send message</button>
                    </form>

                </div>
            </div>
            <div className={toggleSms ? "add-website div-pop active" : "add-website div-pop"} >
                <div className="card-div ">
                    <div className="x-subscribe x-button" onClick={toggleCardSMS}>
                        <img src={xmark} alt="xmark.svg" className="icon" />
                    </div>
                    <div className="subscribe-div-text">
                        <h1 className="h1-text "> New message SMS  </h1>
                        <p>add new message for your client</p>
                    </div>
                    <form action="" className="form-subscribe" id="form-subscribe" onSubmit={(e) => messageSmsSend(e)}>
                        <p className='label-p' >message</p>

                        <textarea id="w3review" name="w3review" rows="3" cols="50" placeholder="type your message here" required value={messageSMS} onChange={(e) => setMessageSMS(e.target.value)} />


                        <button className="button-form" >send message</button>

                    </form>

                </div>
            </div>

            {userAppointments.map(user => (
                <Card user={user}
                    setUpdateUi={setUpdateUi}
                    key={user._id}

                    setIdUser={setIdUser}

                    setMessage={setMessage}
                    setLink={setLink}
                    toggleCardPop={toggleCardPop}

                    setMessageSMS={setMessageSMS}
                    toggleCardSMS={toggleCardSMS}

                    setSuccessAlertMessage={setSuccessAlertMessage}
                    setToggleAlertSucssesParent={setToggleAlertSucsses}
                    setToggleAlertErrorParent={setToggleAlertError}
                    setErrorAlertMessage={setErrorAlertMessage}
                    setToggleAlertSucsses={setToggleAlertSucsses}

                />
            ))}


        </div>

    )
}

export default AppointmentEnd
import React from 'react'
import Navpar from '../../components/navpar/Navpar'
import Header from '../../components/header/Header';
import HeadOfSec from '../../components/head-of-sec/HeadOfSec';

import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie"
import axios from 'axios'

import profileImg from "../../../assets/imgs/team/photo.jpg"
import uploadImg from "../../../assets/imgs/icon/arrow-up-from-line.svg"

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useLocation } from 'react-router-dom';

import SuccessAlert from "../../../components/alertCopm/SuccessAlert"
import ErrorAlert from '../../../components/alertCopm/ErrorAlert';


function Setting() {


    let [errorAlertMessage, setErrorAlertMessage] = useState("")
    let [toggleAlertError, setToggleAlertError] = useState(false)
    let [toggleAlertSucsses, setToggleAlertSucsses] = useState(false)
    let [successAlertMessage, setSuccessAlertMessage] = useState("")




    let [user, setUser] = useState({})
    let [appointmentsState, setAppointments] = useState([])
    let [appointmentsStateFalse, setAppointmentsFalse] = useState([])
    let appointmentsLength = appointmentsState.length
    let appointmentsLengthFalse = appointmentsStateFalse.length

    let { fullName, img, _id, appointments, phone, email } = user



    let [phoneState, setPhone] = useState(phone)
    let [fullNameState, setFullName] = useState(fullName)
    let [imgFile, setImgFile] = useState(fullName)




    useEffect(() => {
        let userId = localStorage.getItem("userId")
        axios.get(`http://localhost:5000/api/user/${userId}`).then(response => {
            setUser(response.data);
            setAppointments(response.data.appointments.filter(item => item.booked === true && item.available === true))
            setAppointmentsFalse(response.data.appointments.filter(item => item.booked === true && item.available === false))
        })
        setFullName(fullName)
        setPhone(phone)
    }, [fullName])


    let updateUserData = (e) => {
        e.preventDefault()
        let userId = localStorage.getItem("userId")
        console.log(userId)
        const formData = new FormData()
        formData.append('image', imgFile);
        formData.append('phone', phoneState);
        formData.append('fullName', fullNameState);
        axios.put(`http://localhost:5000/api/user-update/${userId}`, formData).then((response) => {
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

            }
        })


    }

    return (
        <div className='grid-dashboard'>
            <ErrorAlert AlertMessage={errorAlertMessage} toggleAlert={toggleAlertError} />
            <SuccessAlert AlertMessage={successAlertMessage} toggleAlert={toggleAlertSucsses} />
            <Navpar />
            <div className='content-dashboard' >
                <Header />
                <HeadOfSec user={user} appointmentsLength={appointmentsLength} appointmentsLengthFalse={appointmentsLengthFalse} />

                <div className='container' onSubmit={(e) => updateUserData(e)}>
                    <div className="setting-div">
                        <form action="" className="setting-form">
                            <div className="avatar-div-parent">
                                <label for="file" className="choose-file-label">
                                    <input id="file" type="file" className="choose-file-input" onChange={(e) => setImgFile(e.target.files[0])} />
                                    <img src={uploadImg} className="svg-icon" alt="arrow-up" />
                                </label>
                                <div className="avatar-div-img-change-img">
                                    <div className="avatar-div">
                                        <img src={img ? `http://localhost:5000/${img}` : profileImg} alt="avatar img"
                                            className="avatar-img" />
                                    </div>
                                </div>
                                <div className="name-username-avatar-div">
                                    <p className="name-avatar">{fullName}</p>

                                </div>
                            </div>
                            <div className="input-part-parent">
                                <div className="input-label">
                                    <label for="name-input">Your Name</label>
                                    <input type="text" placeholder="name" value={fullNameState} onChange={(e) => setFullName(e.target.value)} id="name-input" />
                                </div>

                                <div className="input-label">
                                    <label for="whatsapp-number">Your number</label>
                                    <PhoneInput country={'ca'} enableSearch={true} value={phoneState} onChange={(phoneState) => setPhone(phoneState)} />

                                </div>
                            </div>
                            <button className="button">save</button>

                        </form>
                        <div className="input-part-parent email-setting">
                            <div className="input-label">
                                <label for="email-input">Your email : </label>
                                <b>{email}</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting
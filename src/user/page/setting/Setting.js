import React from 'react'


import { useState, useEffect } from 'react';
import axios from 'axios'

import profileImg from "../../../assets/imgs/proFile/imgDefult.svg"
import uploadImg from "../../../assets/imgs/icon/arrow-up-from-line.svg"

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

import SuccessAlert from "../../../components/alertCopm/SuccessAlert"
import ErrorAlert from '../../../components/alertCopm/ErrorAlert';

// import { BASE_URL } from "../../../server/server"


function Setting() {
    let BASE_URL = process.env.REACT_APP_API_LINK

    let [errorAlertMessage, setErrorAlertMessage] = useState("")
    let [toggleAlertError, setToggleAlertError] = useState(false)
    let [toggleAlertSucsses, setToggleAlertSucsses] = useState(false)
    let [successAlertMessage, setSuccessAlertMessage] = useState("")




    let [user, setUser] = useState({})
    let { fullName, img, _id, appointments, phone, email } = user

    let [phoneState, setPhone] = useState(phone)
    let [fullNameState, setFullName] = useState(fullName)
    let [imgFile, setImgFile] = useState(fullName)

    useEffect(() => {
        let userId = localStorage.getItem("userId")
        axios.get(`${BASE_URL}/api/user/${userId}`).then(response => {
            setUser(response.data);
        
        })
        setFullName(fullName)
        setPhone(phone)
    }, [fullName])


    let updateUserData = (e) => {
        e.preventDefault()
        let userId = localStorage.getItem("userId")
        const formData = new FormData()
        formData.append('image', imgFile);
        formData.append('phone', phoneState);
        formData.append('fullName', fullNameState);
        axios.put(`${BASE_URL}/api/user-update/${userId}`, formData).then((response) => {
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
        <div className='content-dashboard' >
            <ErrorAlert AlertMessage={errorAlertMessage} toggleAlert={toggleAlertError} />
            <SuccessAlert AlertMessage={successAlertMessage} toggleAlert={toggleAlertSucsses} />

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
                                    <img src={img ? img : profileImg} alt="avatar img" className="avatar-img" />
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
    )
}

export default Setting
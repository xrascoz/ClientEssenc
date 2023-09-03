import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorAlert from '../../components/alertCopm/ErrorAlert';
import SuccessAlert from '../../components/alertCopm/SuccessAlert'


function ForgetPassword() {
    let BASE_URL = process.env.REACT_APP_API_LINK
    const navigate = useNavigate();
    let [errorAlertMessage, setErrorAlertMessage] = useState("")
    let [toggleAlertError, setToggleAlertError] = useState(false)
    let [toggleAlertSucsses, setToggleAlertSucsses] = useState(false)
    let [successAlertMessage, setSuccessAlertMessage] = useState("")


    let [email, setEmail] = useState("")

    let sendDataForm = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/api/send-otp-user`, { email }).then((response) => {
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
                localStorage.setItem("emailUser", email)
                setTimeout(() => {
                    navigate("/submit-otp-user")
                }, 5000)
            }
        })
    }

    return (
        <div className="container register-container">
            <ErrorAlert AlertMessage={errorAlertMessage} toggleAlert={toggleAlertError} />
            <SuccessAlert AlertMessage={successAlertMessage} toggleAlert={toggleAlertSucsses} />
            <div className="card-data">
                <div className="container-card">
                    <form action="" className="form-register form-login" onSubmit={(e) => sendDataForm(e)}>
                        <div className="register-up-div">
                            <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} value={email} />
                            <input type='submit' className="button-form" />
                            <div className="sing-in">
                                <Link className="sing" to="/sing-up"> Sing Up </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
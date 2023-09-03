import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorAlert from '../../../components/alertCopm/ErrorAlert';
import SuccessAlert from '../../../components/alertCopm/SuccessAlert'


function SubmitOtpUser() {

    let BASE_URL = process.env.REACT_APP_API_LINK
    
    const navigate = useNavigate();
    let [successAlertMessage, setSuccessAlertMessage] = useState("")
    let [toggleAlertSucsses, setToggleAlertSucsses] = useState(false)

    let [errorAlertMessage, setErrorAlertMessage] = useState("")
    let [toggleAlertError, setToggleAlertError] = useState(false)
    
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [otp, setOtp] = useState("")

    let [toggleForm, setToggleForm] = useState(false)

    useEffect(() => {
        setEmail(localStorage.getItem("emailUser"))
    }, [])
    let sendDataForm = (e) => {
        e.preventDefault()
        axios.put(`${BASE_URL}/api/submit-otp-admin`, { email, otp , password }).then((response) => {
            if (response.data.error) {
                setErrorAlertMessage(response.data.error)
                setToggleAlertError(true)
                setTimeout(() => {
                    setToggleAlertError(false)
                }, 5000)
                setToggleForm(false)
            } else {
                setSuccessAlertMessage(response.data.success)
                setToggleAlertSucsses(true)
                setTimeout(() => {
                    setToggleAlertSucsses(false)
                }, 5000)

                setTimeout(() => {
                    navigate("/admin/login")
                }, 5000)
            }
        })
    }
    let reSendOTP = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/api/register-resend-otp-admin`, { email  }).then((response) => {
            if (response.data.error) {
                setErrorAlertMessage(response.data.error)
                setToggleAlertError(true)
                setTimeout(() => {
                    setToggleAlertError(false)
                }, 5000)
            } else {
                setToggleForm(false)
                setSuccessAlertMessage(response.data.success)
                setToggleAlertSucsses(true)
                setTimeout(() => {
                    setToggleAlertSucsses(false)
                }, 5000)
            }
        })
    }
    let toggleFuncForm = (e) => {
        e.preventDefault()
        setToggleForm(true)
    }

    return (
        <div className="container register-container">
            <ErrorAlert AlertMessage={errorAlertMessage} toggleAlert={toggleAlertError} />
            <SuccessAlert AlertMessage={successAlertMessage} toggleAlert={toggleAlertSucsses} />
            <div className="card-data">
                <div className="container-card">
                    <form action="" className={!toggleForm ? "form-register form-sing-up" : "form-register form-sing-up disabled"} onSubmit={(e) => toggleFuncForm(e)}>
                        <div className="register-up-div">
                            <input type="number" placeholder="Enter The Code" required onChange={(e) => setOtp(e.target.value)} value={otp} />
                            <input type='submit' className="button-form" />
                            <div className="resent-the-code"><a onClick={(e) => reSendOTP(e)}>resend Code</a></div>
                            <div className="sing-in">
                                <Link className="sing" to="/admin/sing-up"> Sing Up </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="card-data">
                <div className="container-card">
                    <form action="" className={toggleForm ? "form-register change-Password" : "form-register change-Password disabled"} onSubmit={(e) => sendDataForm(e)}>
                        <div className="register-up-div">
                            <input type="password" placeholder="Enter Your New Password" required onChange={(e) => setPassword(e.target.value)} value={password} />
                            <input type='submit' className="button-form" />
                            <div className="resent-the-code"><a onClick={(e) => reSendOTP(e)}>resend Code</a></div>
                            <div className="sing-in">
                                <Link className="sing" to="/admin/sing-up"> Sing Up </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SubmitOtpUser
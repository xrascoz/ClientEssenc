import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorAlert from '../../components/alertCopm/ErrorAlert';
import SuccessAlert from '../../components/alertCopm/SuccessAlert'


import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
function SingUp() {

    let [fullName, setFullName] = useState("")
    let [phone, setPhone] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [confirmPassword, setConfirmPassword] = useState("")

    let [toggleForm, setToggleForm] = useState(false)
    let [togglePasswordMatch, setTogglePasswordMatch] = useState(false)

    let [errorAlertMessage, setErrorAlertMessage] = useState("")

    let [successAlertMessage, setSuccessAlertMessage] = useState("")
    let [toggleAlertError, setToggleAlertError] = useState(false)
    let [toggleAlertSucsses, setToggleAlertSucsses] = useState(false)
    const navigate = useNavigate();
   

    let sendDataForm = (e) => {
        e.preventDefault()

        if (password == confirmPassword) {

            axios.post("http://localhost:5000/api/register-user", { fullName, phone, email, password }).then((response) => {
                console.log(response.data);
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
                    setToggleForm(!toggleForm)
                    setTogglePasswordMatch(false)
                }
            })
        } else {
            setTogglePasswordMatch(true)

        }
    }

    let [otp, setOtp] = useState("")
    let sendOTPForm = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/api/register-submit", { email, otp }).then((response) => {
            console.log(response.data);
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
                    navigate('/login');
                   
                }, 5000)
            }
        })
    }
    let resendOtp = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/api/register-resend-otp", { email }).then((response) => {
            console.log(response.data);
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
        <div className="container register-container">
            <ErrorAlert AlertMessage={errorAlertMessage} toggleAlert={toggleAlertError} />
            <SuccessAlert AlertMessage={successAlertMessage} toggleAlert={toggleAlertSucsses} />
            <div className="card-data">
                <div className="container-card">
                    <form action="" className={!toggleForm ? "form-register form-sing-up" : "form-register form-sing-up disabled"} onSubmit={(e) => sendDataForm(e)}>
                        <div className="register-up-div">
                            <input type="text" placeholder="Full Name" required value={fullName} onChange={(e) => setFullName(e.target.value)} />
                            <PhoneInput country={'ca'} enableSearch={true} required onChange={(phone) => setPhone(phone)} />
                            <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <input type="password" placeholder="confirm your password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            <p className={togglePasswordMatch ? "Passwords-not-match" : "Passwords-not-match disabled"}>Passwords did not match</p>

                            <button className="button-form">Create Account</button>
                            <div className="sing-in">
                                <Link className="sing" to="/login">Login</Link>
                            </div>
                        </div>
                    </form>

                    <form action="" className={toggleForm ? "form-register otp-sing-up" : "form-register otp-sing-up disabled"} onSubmit={(e) => sendOTPForm(e)}>
                        <div className="register-up-div">
                            <input type="number" placeholder="ُEnter The Code" required value={otp} onChange={(e) => setOtp(e.target.value)} />
                            <button className="button-form">Send Code</button>
                            <div className="sing-in">
                                <a className="sing" to="/login" onClick={(e) => resendOtp(e)} >resend Code</a>
                            </div>
                        </div>
                    </form>
                    <div className="email-send-div send disabled">
                        <div className="img-card-pop-email">
                            <img src="assets/img/icons/sendemail.svg" alt="email" />
                        </div>
                        <div className="pop-div-text">
                            <h1 className="h1-text">Email Was Send</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem maiores vero eveniet eum
                                quisquam a nisi harum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingUp
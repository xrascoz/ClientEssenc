import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import ErrorAlert from '../../components/alertCopm/ErrorAlert';
import SuccessAlert from '../../components/alertCopm/SuccessAlert'

function Login() {
    const [cookies, setCookie] = useCookies(['access_token_User']);
    const navigate = useNavigate();
    let [errorAlertMessage, setErrorAlertMessage] = useState("")
    let [toggleAlertError, setToggleAlertError] = useState(false)
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let sendDataForm = (e) => {
        e.preventDefault()

        axios.post("http://localhost:5000/api/login-user", { email, password }).then((response) => {
            if (response.data.error) {
                setErrorAlertMessage(response.data.error)
                setToggleAlertError(true)
                setTimeout(() => {
                    setToggleAlertError(false)
                }, 5000)
            } else {
                
                setCookie('access_token_User', response.data.token)
                console.log(response)
                window.localStorage.setItem("userId", response.data.userId)
                navigate(`/user/appointment/${response.data.userId}`)
            }
        })
    }


    return (
        <div className="container register-container">
              <ErrorAlert AlertMessage={errorAlertMessage} toggleAlert={toggleAlertError} />
            <div className="card-data">
                <div className="container-card">
                    <form action="" className="form-register form-login" onSubmit={(e) => sendDataForm(e)}>
                        <div className="register-up-div">
                            <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} value={email} />
                            <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} value={password} />
                            <input type='submit' className="button-form" />
                            <Link className="forgot-pass-a" to="/forgot-pass" >Forget Password</Link>
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

export default Login
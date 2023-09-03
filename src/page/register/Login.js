import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import {  useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import ErrorAlert from '../../components/alertCopm/ErrorAlert';
import logo2 from "../../assets/imgs/logo/logo.png"

import Layer1 from "../../assets/imgs/icon/Layer1.png"
import Layer2 from "../../assets/imgs/icon/Layer2.png"
import Layer3 from "../../assets/imgs/icon/Layer3.png"





// import { BASE_URL } from "../../server/server"

function Login() {
    let BASE_URL = process.env.REACT_APP_API_LINK
    const [cookiesUser, setCookieUser] = useCookies(['access_token_User']);
    const [cookies, setCookie] = useCookies(['access_token']);

    const navigate = useNavigate();
    let [errorAlertMessage, setErrorAlertMessage] = useState("")
    let [toggleAlertError, setToggleAlertError] = useState(false)
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let sendDataForm = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/api/login-user`, { email, password }).then((response) => {
            if (response.data.error) {
                setErrorAlertMessage(response.data.error)
                setToggleAlertError(true)
                setTimeout(() => {
                    setToggleAlertError(false)
                }, 5000)
            } else {
                localStorage.removeItem("adminId")
                localStorage.removeItem("emailUser")
                setCookie('access_token', '');

                setCookieUser('access_token_User', response.data.token)
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
                   
                        <img src={Layer1}  className="element-img el1" alt="element-img" />
                        <img src={Layer2}  className="element-img el2" alt="element-img" />
                        <img src={Layer3}  className="element-img el3" alt="element-img" />
                        <div className="register-up-div">
                            <Link to="/" className="a-logo a-logo-dashboard">
                                <img src={logo2} alt="logo.png" />
                            </Link>
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
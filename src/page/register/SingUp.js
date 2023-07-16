import React from 'react'
import { Link } from "react-router-dom";
import SuccessAlert from '../../components/alertCopm/SuccessAlert'
import axios from 'axios';
import { useEffect, useState } from 'react';
function SingUp() {

    let [fullName, setFullName] = useState("")
    let [phone, setPhone] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let sendDataForm = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/api/register", { fullName, phone, email, password }).then((response) => {
            console.log(response.data);
        })
    }

    return (
        <div class="container register-container">
            <div class="card-data">
                <div class="container-card">
                    <form action="" class="form-register form-login" onSubmit={(e) => sendDataForm(e)}>
                        <div class="register-up-div">
                            <input type="text" placeholder="Full Name" required value={fullName} onChange={(e) => setFullName(e.target.value)} />
                            <input type="number" placeholder="Phone number" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                            <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button class="button-form">Create Account</button>
                            <div class="sing-in">
                                <Link class="sing" to="/login">Login</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SingUp
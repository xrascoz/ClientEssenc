import React from 'react'
import {  Link } from "react-router-dom";
function Login() {
    return (
        <div class="container register-container">
            <div class="card-data">
                <div class="container-card">
                    <form action="" class="form-register form-login">
                        <div class="register-up-div">
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <button class="button-form"> Login</button>
                            <a class="forgot-pass-a" href="forgot-pass.html">Forget Password</a>
                            <div class="sing-in">
                                <Link  class="sing" to="/sing-up"> Sing Up </Link>
                            </div>
                          
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
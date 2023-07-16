import React from 'react'
import iconError from "../../assets/imgs/icon/circle-info.svg"

function ErrorAlert() {
    return (
        <div class="alert-div-parent alert-error">
            <div class="icon-alert">
                <img class="icon" src={iconError} alt="bell.svg" />
            </div>
            <p>
                your email or password is incorrect.
            </p>
        </div>
    )
}

export default ErrorAlert
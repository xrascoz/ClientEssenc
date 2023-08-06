import React from 'react'
import iconError from "../../assets/imgs/icon/circle-info.svg"

function ErrorAlert({ AlertMessage, toggleAlert }) {
    return (
        <div className={!toggleAlert ? "alert-div-parent alert-error" : "alert-div-parent alert-error active"}>
            <div className="icon-alert">
                <img className="icon" src={iconError} alt="bell.svg" />
            </div>
            <p>
                {AlertMessage}
            </p>
        </div>
    )
}

export default ErrorAlert
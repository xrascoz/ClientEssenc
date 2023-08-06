import React from 'react'
import iconCheck from "../../assets/imgs/icon/check.svg"

function SuccessAlert({ AlertMessage, toggleAlert }) {
    return (
        <div className={!toggleAlert ? "alert-div-parent alert-success " : "alert-div-parent alert-success active"}>
            <div className="icon-alert">
                <img className="icon" src={iconCheck} alt="bell.svg" />
            </div>
            <p>
                {AlertMessage}
            </p>
        </div>
    )
}

export default SuccessAlert
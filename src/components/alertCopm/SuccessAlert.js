import React from 'react'
import iconCheck from "../../assets/imgs/icon/check.svg"

function SuccessAlert() {
    return (
        <div class="alert-div-parent alert-success">
            <div class="icon-alert">
                <img class="icon" src={iconCheck} alt="bell.svg" />
            </div>
            <p>
                Success! This alert box indicates a successful or positive action.
            </p>
        </div>
    )
}

export default SuccessAlert
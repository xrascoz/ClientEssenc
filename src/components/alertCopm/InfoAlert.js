import React from 'react'
import iconInfo from "../../assets/imgs/icon/circle-info.svg"

function InfoAlert() {
    return (
        <div class="alert-div-parent alert-info">
            <div class="icon-alert">
                <img class="icon" src={iconInfo} alt="bell.svg" />
            </div>
            <p>
                Info! This alert box indicates a neutral informative change or action.
            </p>
        </div>
    )
}

export default InfoAlert
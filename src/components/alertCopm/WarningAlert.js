import React from 'react'
import iconWarning from "../../assets/imgs/icon/circle-info.svg"
function WarningAlert() {
    return (
        <div class="alert-div-parent alert-warning">
            <div class="icon-alert">
                <img class="icon" src={iconWarning} alt="bell.svg" />
            </div>
            <p>
                Warning! This alert box indicates a warning that might need attention.
            </p>
        </div>
    )
}

export default WarningAlert
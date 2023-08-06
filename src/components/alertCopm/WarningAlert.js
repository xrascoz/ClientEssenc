import React from 'react'
import iconWarning from "../../assets/imgs/icon/circle-info.svg"
function WarningAlert() {
    return (
        <div className="alert-div-parent alert-warning">
            <div className="icon-alert">
                <img className="icon" src={iconWarning} alt="bell.svg" />
            </div>
            <p>
                Warning! This alert box indicates a warning that might need attention.
            </p>
        </div>
    )
}

export default WarningAlert
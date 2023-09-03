import React from 'react'
import emailSvg from "../../../../assets/imgs/icon/envelope.svg"
import phoneSvg from "../../../../assets/imgs/icon/phone.svg"
import deleteIcon from "../../../../assets/imgs/icon/trash.svg"

// import { BASE_URL } from "../../../../server/server"


import { useState } from 'react'

import axios from 'axios'


function MessageCard({ data, setUpdateUi  , setSuccessAlertMessage , setToggleAlertSucsses , setErrorAlertMessage , setToggleAlertError }) {

    let BASE_URL = process.env.REACT_APP_API_LINK
    let { name, phone, gmail, message, _id } = data

    let [toggle, setToggle] = useState(false)

    let deleteFuncMessage = () => {
        axios.delete(`${BASE_URL}/api/contact/${_id}`).then((response) => {
            if (response.data.error) {
                setErrorAlertMessage(response.data.error)
                setToggleAlertError(true)
                setTimeout(() => {
                    setToggleAlertError(false)
                }, 5000)

            } else {
                setSuccessAlertMessage(response.data.success)
                setToggleAlertSucsses(true)
                setTimeout(() => {
                    setToggleAlertSucsses(false)
                }, 5000)
                setUpdateUi(prev => (!prev))
            }
        })
    }



    return (
        <>
            <div className="card-div  card-div-message">
                <div className='delete-icon-card' onClick={() => deleteFuncMessage()} >
                    <img src={deleteIcon} alt="github.svg" />
                </div>
                <h2 className="name-of-text-card">{name}</h2>
                <div className="p-card-parent" onClick={() => setToggle(!toggle)}>
                    <p className={toggle ? "p-card active" : "p-card"}>{message}</p>
                    <span className="show-more">{toggle ? "show less" : "show more"}</span>
                </div>
                <div className='email-phone-div'>
                    <a target="_blank" href={`https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=${gmail}`} className="icon-a-card icon-git-hub">
                        <img src={emailSvg} alt="github.svg" />
                    </a>
                    <a target="_blank" href={`https://wa.me/${phone}`} className="icon-a-card icon-git-hub">
                        <img src={phoneSvg} alt="github.svg" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default MessageCard
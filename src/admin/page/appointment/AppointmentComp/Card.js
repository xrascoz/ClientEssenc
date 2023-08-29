import React from 'react'
import yesImg from "../../../../assets/imgs/icon/yes.svg"
import removeImg from "../../../../assets/imgs/icon/remove.svg"
import imgDefult from "../../../../assets/imgs/proFile/imgDefult.svg"
import phoneImg from "../../../../assets/imgs/icon/phone-sms.svg"
import emailImg from "../../../../assets/imgs/icon/email.svg"

import ErrorAlert from '../../../../components/alertCopm/ErrorAlert';
import SuccessAlert from '../../../../components/alertCopm/SuccessAlert'

import { BASE_URL } from "../../../../server/server"

import { useState, useEffect } from 'react';

import plusIcon from "../../../../assets/imgs/icon/plusicon.svg"
import axios from 'axios';

function Card({ user, setUpdateUi, setMessage, setLink, toggleCardPop, setMessageSMS, toggleCardSMS, setToggleAlertSucssesParent, setToggleAlertErrorParent }) {



    let { appointments, fullName, email, phone, img, _id } = user

    let [appointmentsLength, setAppointmentsLength] = useState([])



    let [successAlertMessage, setSuccessAlertMessage] = useState("")
    let [toggleAlertSucsses, setToggleAlertSucsses] = useState(false)

    let [errorAlertMessage, setErrorAlertMessage] = useState("")
    let [toggleAlertError, setToggleAlertError] = useState(false)

    let appointmentsUnavailable = (e) => {
        let appointmentsId = e.currentTarget.getAttribute("appointmentsId")
        axios.put(`${BASE_URL}/api/user/appointments/${_id}/${appointmentsId}/`, { available: false }).then((response) => {
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
            <ErrorAlert AlertMessage={errorAlertMessage} toggleAlert={toggleAlertError} />
            <SuccessAlert AlertMessage={successAlertMessage} toggleAlert={toggleAlertSucsses} />
            {appointments.length > 0 ? (
                <div className='card-appointment'>
                    <div className='img-profile-name-contact' >
                        <div className='img-name' >
                            <div className='img-prof' >
                                <img src={img ? img: imgDefult} alt='img-prof' />
                            </div>
                            <div  >
                                <p>{fullName}</p>
                          
                            </div>
                        </div>
                        <div className='contact' >
                            <img src={phoneImg} alt='img-contact' idUser={_id} onClick={(e) => toggleCardSMS(e)} />
                            <img src={emailImg} alt='img-contact' idUser={_id} onClick={(e) => toggleCardPop(e)} />
                        </div>
                    </div>
                    {
                        appointments.map((item , index) => {
                            if (item.available) {
                                return (
                                    <div className='time-date' key={item._id}  >
                                        <h2 >{item.dateHour}</h2>
                                        <h2 >To</h2>
                                        <h2 >{item.dateHourEnd}</h2>
                                        <p>{item.dateDay}</p>
                                        <div className='name-ot-meeting-div-remove' >
                                            <p>{item.category}</p>
                                            <div className='remove-done' >
                                                <img src={yesImg} appointmentsId={item._id} alt='icon' onClick={(e) => appointmentsUnavailable(e)} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        })
                    }
                </div>
            ) : (
                "false"
            )
            }


        </>

    )
}

export default Card
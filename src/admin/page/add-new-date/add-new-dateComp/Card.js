import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

import ErrorAlert from '../../../../components/alertCopm/ErrorAlert';
import SuccessAlert from '../../../../components/alertCopm/SuccessAlert'

function Card({ item , setUpdateUi }) {
    let [successAlertMessage, setSuccessAlertMessage] = useState("")
    let [toggleAlertSucsses, setToggleAlertSucsses] = useState(false)

    let [errorAlertMessage, setErrorAlertMessage] = useState("")
    let [toggleAlertError, setToggleAlertError] = useState(false)

    let { dateHour, dateHourEnd, dateDay, category, available, booked , _id } = item
 
    let deleteDate = (e) => {
        e.preventDefault()
        axios.delete(`http://localhost:5000/api/appointment/${_id}`).then((response) => {
            if (response.data.error) {
                setErrorAlertMessage(response.data.error)
                setToggleAlertError(true)
                setTimeout(() => {
                    setToggleAlertError(false)
                }, 5000)

            } else {
                setSuccessAlertMessage(response.data.success)
                console.log(response.data.success)
                setToggleAlertSucsses(true)
                setTimeout(() => {
                    setToggleAlertSucsses(false)
                }, 5000)
                setUpdateUi(prev => (!prev))

            }
        })
    }

    return (
        <div className='card-date' >
            <ErrorAlert AlertMessage={errorAlertMessage} toggleAlert={toggleAlertError} />
            <SuccessAlert AlertMessage={successAlertMessage} toggleAlert={toggleAlertSucsses} />
            <div className='time-date'  >
                <h2>{dateHour} , {dateHourEnd}</h2>
                <p>{dateDay}</p>
            </div>
            <div className='buttons-date' >
                <button className='delete-button' onClick={(e) => deleteDate(e)} >Delete</button>
            </div>
        </div>
    )
}

export default Card
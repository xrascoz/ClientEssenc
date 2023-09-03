import React from 'react'
import axios from 'axios';




function Card({ item , setUpdateUi , setSuccessAlertMessage , setErrorAlertMessage , setToggleAlertSucsses , setToggleAlertError }) {
   
    let BASE_URL = process.env.REACT_APP_API_LINK
    let { dateHour, dateHourEnd, dateDay, category, available, booked , _id } = item
 
    let deleteDate = (e) => {
        e.preventDefault()
        axios.delete(`${BASE_URL}/api/appointment/${_id}`).then((response) => {
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
        <div className='card-date' >

            <div className='time-date'  >
                <h2>{dateHour} , {dateHourEnd}</h2>
                <p>{dateDay}</p>
                <h3>{category}</h3>
            </div>
            <div className='buttons-date' >
                <button className='delete-button' onClick={(e) => deleteDate(e)} >Delete</button>
            </div>
        </div>
    )
}

export default Card
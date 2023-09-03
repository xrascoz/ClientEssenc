import React from 'react'
import yesImg from "../../../../assets/imgs/icon/yes.svg"
import removeImg from "../../../../assets/imgs/icon/remove.svg"
import imgDefult from "../../../../assets/imgs/proFile/imgDefult.svg"
import phoneImg from "../../../../assets/imgs/icon/phone-sms.svg"
import emailImg from "../../../../assets/imgs/icon/email.svg"



// import { BASE_URL } from "../../../../server/server"


import axios from 'axios';

function Card({ user, setUpdateUi, setMessage, setLink, toggleCardPop, setMessageSMS, toggleCardSMS, setToggleAlertSucssesParent, setToggleAlertErrorParent , setSuccessAlertMessage  , setErrorAlertMessage , setToggleAlertError , setToggleAlertSucsses}) {

    let BASE_URL = process.env.REACT_APP_API_LINK

    let { appointments, fullName, email, phone, img, _id } = user

    let appointmentsLength = appointments.length



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
    let appointmentsAvailable = (e) => {
        let appointmentsId = e.currentTarget.getAttribute("appointmentsId")
        axios.put(`${BASE_URL}/api/user/appointments/${_id}/${appointmentsId}/`, { available: true }).then((response) => {
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
        <div className='card-appointment'>
            <div className='img-profile-name-contact' >
                <div className='img-name' >
                    <div className='img-prof' >
                    <img src={img ? img: imgDefult} alt='img-prof' />

                    </div>
                    <div>
                        <p>{fullName}</p>
                        <div>
                            <p className='appointmentsLength' >{appointmentsLength} appointments </p>
                        </div>
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
                    if (!item.available) {
                        return (
                            <div className='time-date'  >
                         
                                <h2 >{item.dateHour}</h2>
                                <p>{item.dateDay}</p>
                                <div className='name-ot-meeting-div-remove' >
                                    <p>{item.category}</p>
                                    <div className='remove-done' >
                                        <img src={removeImg} appointmentsId={item._id} alt='icon' onClick={(e) => appointmentsAvailable(e)} />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }


        </div>
    )
}

export default Card
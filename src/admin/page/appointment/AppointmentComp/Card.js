import React from 'react'
import yesImg from "../../../../assets/imgs/icon/yes.svg"
import removeImg from "../../../../assets/imgs/icon/remove.svg"
import imgDefult from "../../../../assets/imgs/review/photo.jpg"
import phoneImg from "../../../../assets/imgs/icon/phone-sms.svg"
import emailImg from "../../../../assets/imgs/icon/email.svg"

import ErrorAlert from '../../../../components/alertCopm/ErrorAlert';
import SuccessAlert from '../../../../components/alertCopm/SuccessAlert'

import { useState, useEffect } from 'react';

import plusIcon from "../../../../assets/imgs/icon/plusicon.svg"
import xmark from "../../../../assets/imgs/icon/xmark.svg"
import axios from 'axios';

function Card({ user, setUpdateUi }) {



    let { appointments, fullName, email, phone, img, _id } = user

    let [toggle, setToggle] = useState(false)
    let [toggleSms, setToggleSms] = useState(false)

    let toggleCardPop = () => {
        setToggle(!toggle)
    }
    let toggleCardSMS = () => {
        setToggleSms(!toggleSms)
    }

    let [successAlertMessage, setSuccessAlertMessage] = useState("")
    let [toggleAlertSucsses, setToggleAlertSucsses] = useState(false)

    let [errorAlertMessage, setErrorAlertMessage] = useState("")
    let [toggleAlertError, setToggleAlertError] = useState(false)


    let [message, setMessage] = useState("")
    let [link, setLink] = useState("")
    let [messageSMS, setMessageSMS] = useState("")


    let addDate = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:5000/api/send-email-message/${_id}`, { message, link }).then((response) => {

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
            }
        })
    }
    let addDateSms = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:5000/api/sms/${_id}`, { message: messageSMS }).then((response) => {

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
            }
        })
    }

    let appointmentsUnavailable = (e) => {
        let appointmentsId = e.currentTarget.getAttribute("appointmentsId")
        axios.put(`http://localhost:5000/api/user/appointments/${_id}/${appointmentsId}/`, { available: false }).then((response) => {
            console.log(response.data)
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
            <ErrorAlert AlertMessage={errorAlertMessage} toggleAlert={toggleAlertError} />
            <SuccessAlert AlertMessage={successAlertMessage} toggleAlert={toggleAlertSucsses} />

            <div className={toggle ? "add-website div-pop active" : "add-website div-pop"} >
                <div className="card-div ">
                    <div className="x-subscribe x-button" onClick={toggleCardPop}>
                        <img src={xmark} alt="xmark.svg" className="icon" />
                    </div>
                    <div className="subscribe-div-text">
                        <h1 className="h1-text "> New message  </h1>
                        <p>add new message for your client</p>
                    </div>
                    <form action="" className="form-subscribe" id="form-subscribe" onSubmit={(e) => addDate(e)}>
                        <p className='label-p'>message</p>

                        <textarea id="w3review" name="w3review" rows="3" cols="50" placeholder="type your message here" required value={message} onChange={(e) => setMessage(e.target.value)} />
                        <p className='label-p'  >link</p>
                        <input type="text" placeholder="type your link here" required value={link} onChange={(e) => setLink(e.target.value)} />

                        <button className="button-form" >send message</button>
                    </form>

                </div>
            </div>
            <div className={toggleSms ? "add-website div-pop active" : "add-website div-pop"} >
                <div className="card-div ">
                    <div className="x-subscribe x-button" onClick={toggleCardSMS}>
                        <img src={xmark} alt="xmark.svg" className="icon" />
                    </div>
                    <div className="subscribe-div-text">
                        <h1 className="h1-text "> New message SMS  </h1>
                        <p>add new message for your client</p>
                    </div>
                    <form action="" className="form-subscribe" id="form-subscribe" onSubmit={(e) => addDateSms(e)}>
                        <p className='label-p' >message</p>

                        <textarea id="w3review" name="w3review" rows="3" cols="50" placeholder="type your message here" required value={messageSMS} onChange={(e) => setMessageSMS(e.target.value)} />


                        <button className="button-form" >send message</button>
                    </form>

                </div>
            </div>

            {
                appointments.map((item) => {
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
                    
                })
            }



            <div className='img-profile-name-contact' >
                <div className='img-name' >
                    <div className='img-prof' >
                        <img src={img ? `http://localhost:5000/${img}` : imgDefult} alt='img-prof' />
                    </div>
                    <p>{fullName}</p>
                </div>
                <div className='contact' >
                    <img src={phoneImg} alt='img-contact' onClick={toggleCardSMS} />
                    <img src={emailImg} alt='img-contact' onClick={toggleCardPop} />
                </div>
            </div>
        </div>
    )
}

export default Card
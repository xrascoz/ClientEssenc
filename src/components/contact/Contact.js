import React from 'react'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import userSvg from "../../assets/imgs/icon/user.svg"
import phoneSvg from "../../assets/imgs/icon/phone.svg"
import emailSvg from "../../assets/imgs/icon/envelope.svg"
import messageSvg from "../../assets/imgs/icon/message-dots.svg"
import Title from '../title/Title'
import { BASE_URL } from "../../server/server"
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import ErrorAlert from '../../components/alertCopm/ErrorAlert';
import SuccessAlert from '../../components/alertCopm/SuccessAlert'

function Contact() {
  let [errorAlertMessage, setErrorAlertMessage] = useState("")
  let [successAlertMessage, setSuccessAlertMessage] = useState("")
  let [toggleAlertError, setToggleAlertError] = useState(false)
  let [toggleAlertSucsses, setToggleAlertSucsses] = useState(false)
  let titleObject = {
    "nameTitle": "Contact Us",
    "descriptionTitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
  }
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [gmail, setGmail] = useState("")
  const [message, setMessage] = useState("")
  let addMessage = (e) => {
    e.preventDefault()
    axios.post(`${BASE_URL}/api/contact`, { name, phone, gmail, message }).then((response) => {
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
        setName("")
        setPhone("")
        setGmail("")
        setMessage("")
      }
    })
  }

  return (
    <div className="section-6 section" id="section-6" >
      <ErrorAlert AlertMessage={errorAlertMessage} toggleAlert={toggleAlertError} />
      <SuccessAlert AlertMessage={successAlertMessage} toggleAlert={toggleAlertSucsses} />
      <div className="container">
        <Title titleObject={titleObject} />
        <div className='form-container' data-aos="fade-up" data-aos-duration="1200">
          <form onSubmit={(e) => addMessage(e)} >
            <div className='name-phone-div' >
              <div className='div-img-input'>
                <img src={userSvg} alt='icon-contact' />
                <input type="text" placeholder="name" required value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className='div-img-input'>
                <img src={phoneSvg} alt='icon-contact' />
                <PhoneInput country={'ca'} enableSearch={true} required value={phone} onChange={(phone) => setPhone(phone)} />
              </div>
            </div>
            <div className='div-img-input'>
              <img src={emailSvg} alt='icon-contact' />
              <input type="email" placeholder="email" required value={gmail} onChange={(e) => setGmail(e.target.value)} />
            </div>
            <div className='div-img-input textarea-div'>
              <img src={messageSvg} alt='icon-contact' />
              <textarea placeholder="your message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
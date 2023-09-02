import React from 'react'
import { useState } from 'react'
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

import RightStyle from '../styleElment/RightStyle'

import locationIcon from "../../assets/imgs/icon/location-dot.svg"
import phoneIcon from "../../assets/imgs/icon/phone.svg"
import envelopeIcon from "../../assets/imgs/icon/envelope.svg"


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
    <section>
      <RightStyle />
      <div className="section-6 section" id="section-6" >
        <ErrorAlert AlertMessage={errorAlertMessage} toggleAlert={toggleAlertError} />
        <SuccessAlert AlertMessage={successAlertMessage} toggleAlert={toggleAlertSucsses} />
        <div className="container">
          <Title titleObject={titleObject} />
          <div className='form-div-parent' >
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
            <div className='contact-about' data-aos="fade-up" data-aos-duration="1200" >
              <div className='details-about-contact' data-aos="fade-up" data-aos-duration="1200" >
                <img src={locationIcon} alt="icon" />
                <div className='tittle-about-contact' >
                  <b>Place</b>
                  <p>5025 Heatherleight Ave,Mississauga,OneL5v2Y7</p>
                </div>
              </div>
              <div className='details-about-contact' data-aos="fade-up" data-aos-duration="1200" >
                <img src={phoneIcon} alt="icon" />
                <div className='tittle-about-contact' >
                  <b>numper</b>
                  <p>01011653271</p>
                </div>
              </div>

              <div className='details-about-contact' data-aos="fade-up" data-aos-duration="1200" >
                <img src={envelopeIcon} alt="icon" />
                <div className='tittle-about-contact' >
                  <b>gmail</b>
                  <p>xrasoz@gmail.com</p>
                </div>
              </div>
              <div className='iframe-map' data-aos="fade-up" data-aos-duration="1200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
             </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
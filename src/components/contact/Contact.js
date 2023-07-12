import React from 'react'

import { useState, useEffect, useRef } from 'react'
import axios from 'axios'


import userSvg from "../../assets/imgs/icon/user.svg"
import phoneSvg from "../../assets/imgs/icon/phone.svg"
import emailSvg from "../../assets/imgs/icon/envelope.svg"
import messageSvg from "../../assets/imgs/icon/message-dots.svg"
import Title from '../title/Title'
function Contact() {

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
    axios.post("http://localhost:9600/api/contact", { name, phone, gmail, message }).then((response) => {
      console.log(response.data);
      setName("")
    })

  }

  return (
    <div className="section-6 section" id="section-6" >
      <Title titleObject={titleObject} />
      <div className="container">
        <div className='form-container'>
          <form onSubmit={(e) => addMessage(e)} >
            <div className='name-phone-div' >
              <div className='div-img-input'>
                <img src={userSvg} />
                <input type="text" placeholder="name" required value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className='div-img-input'>
                <img src={phoneSvg} />
                <input type="number" placeholder="phone" required value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
            </div>

            <div className='div-img-input'>
              <img src={emailSvg} />
              <input type="email" placeholder="email" required value={gmail} onChange={(e) => setGmail(e.target.value)} />
            </div>

            <div className='div-img-input textarea-div'>
              <img src={messageSvg} />
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
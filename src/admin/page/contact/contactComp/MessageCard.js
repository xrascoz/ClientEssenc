import React from 'react'
import emailSvg from "../../../../assets/imgs/icon/envelope.svg"
import phoneSvg from "../../../../assets/imgs/icon/phone.svg"
import { useEffect } from 'react'

import { useState } from 'react'


function MessageCard({ data }) {

    // useEffect(() => {
    //     const card = document.querySelectorAll('.card-div-light')
    //     const UPDATE = ({ x, y }) => {
    //         card.forEach(element => {
    //             const BOUNDS = element.getBoundingClientRect()
    //             const posX = x - BOUNDS.x
    //             const posY = y - BOUNDS.y
    //             const ratioX = posX / BOUNDS.width
    //             const ratioY = posY / BOUNDS.height
    //             element.style.setProperty('--ratio-x', ratioX)
    //             element.style.setProperty('--ratio-y', ratioY)
    //         });
    //     }

    //     document.body.addEventListener('pointermove', UPDATE)
    // }, [])




    let { name, phone, gmail, message } = data

    let [toggle, setToggle] = useState(false)

    return (
        <div>
            <div className="card-div ">
                <h2 className="name-of-text-card">{name}</h2>
                <div className="p-card-parent" onClick={() => setToggle(!toggle)}>
                    <p className={toggle ? "p-card active" : "p-card"}>{message}</p>
                    <span className="show-more">{toggle ? "show less" : "show more"}</span>
                </div>
                <div className='email-phone-div'>
                    <a target="_blank" href={`https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=${gmail}`} className="icon-a-card icon-git-hub">
                        <img src={emailSvg} alt="github.svg" />
                    </a>
                    <a target="_blank" href={`https://wa.me/20${phone}`} className="icon-a-card icon-git-hub">
                        <img src={phoneSvg} alt="github.svg" />
                    </a>
                </div>
            </div>


        </div>
    )
}

export default MessageCard
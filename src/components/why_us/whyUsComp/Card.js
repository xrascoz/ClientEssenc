import React from 'react'
import arrow from "../../../assets/imgs/icon/arrow-down.svg"

import { useEffect } from 'react'
function Card({ whyUsData }) {

    let { title, description } = whyUsData
    let toggleCard = (e) => {

        let arrayWhyUsCard = document.querySelectorAll(".card-why-us")
        arrayWhyUsCard.forEach(element => {
            element.classList.remove("active")
        });
        e.currentTarget.classList.toggle("active")
    }
    useEffect(() => {
        document.querySelectorAll(".card-why-us")[0].classList.add("active")
    }, [])

    return (
        <div className="card-why-us card-light" data-aos="fade-up" data-aos-duration="1000" onClick={(e) => toggleCard(e)}>
            <div className="title-arrow">
                {title}
                <img src={arrow} alt="arrow-down" />
            </div>
            <p>
                {description}
            </p>
        </div>
    )
}

export default Card
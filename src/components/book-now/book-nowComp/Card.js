import React from 'react'

import { Link } from 'react-router-dom'
import checkbox from "../../../assets/imgs/icon/Checkbox.svg"


function Card({ data }) {

    let { name, price, time, advantages } = data

    let dataAdvantages = [...advantages]

    let addPriceToLocalStorage = (e) => {
        localStorage.setItem("price", price)
    }

    return (
        <div className='card' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <p className='p-name' data-aos="fade-up" data-aos-duration="1100" >
                {name}
            </p>
            <div>
                <h2 className='price-book' data-aos="fade-up" data-aos-duration="1200" >
                    {price} <span className='price-currency' >CAD</span>
                </h2>
                <h3 data-aos="fade-up" data-aos-duration="1200">{ time}</h3>
            </div>
            <Link to={`/order/${name}/${price}`} onClick={(e) => addPriceToLocalStorage(e)} className='button' data-aos="fade-up" data-aos-duration="1300">Get Started</Link>
            <div className='advantages-parent' data-aos="fade-up" data-aos-duration="1400" >
                {dataAdvantages.map((element) => {
                    return (
                        <div className='advantages-div' key={element._id}>
                            <img src={checkbox} alt='checkbox' />
                            <p>{element}</p>
                        </div>
                    )
                })}
            </div>
            <span className="shadow-card"></span>
            <span className="shadow-card2"></span>
        </div>
    )
}

export default Card
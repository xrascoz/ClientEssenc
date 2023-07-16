import React from 'react'
import checkbox from "../../../assets/imgs/icon/Checkbox.svg"

function Card({ data }) {

    let { name, price, time, advantages } = data

    let dataAdvantages = [...advantages]

    return (
        <div className='card'  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <p className='p-name' data-aos="fade-up" data-aos-duration="1100" >
                {name}
            </p>
            <div>
                <h2 className='price-book' data-aos="fade-up" data-aos-duration="1200" >
                    {price}<sub>{time}</sub>
                </h2>
               
            </div>
            <button className='button' data-aos="fade-up" data-aos-duration="1300">Get Started</button>
            <div className='advantages-parent' data-aos="fade-up" data-aos-duration="1400" >
                {dataAdvantages.map((element) => {
                    return (
                        <div className='advantages-div'>
                            <img src={checkbox} alt='checkbox' />
                            <p>{element}</p>
                        </div>
                    )
                })}
            </div>
            <span class="shadow-card"></span>
            <span class="shadow-card2"></span>
        </div>
    )
}

export default Card
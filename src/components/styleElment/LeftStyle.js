import React from 'react'
import styleImg from "../../assets/imgs/elment/styleImg.svg"

function LeftStyle() {
    return (
        <div className='style-img-div left-img-div' >
            <img src={styleImg} data-aos="fade-up" data-aos-duration="1200" alt='style-img' />
        </div>
    )
}

export default LeftStyle
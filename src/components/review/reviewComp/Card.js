import React from 'react'
import star from "../../../assets/imgs/icon/star.svg"
import imgReview from "../../../assets/imgs/proFile/imgDefult.svg"

function Card({ data }) {

    let { title, description } = data



    return (
        <div className='card-review' data-aos="fade-up" data-aos-duration="1000"  >
            <div className='img-name-div' >
                <div className='img-reviewer' data-aos="fade-up" data-aos-duration="1100">
                    <img src={imgReview}  alt='reviewer-img'/>
                </div>
                <div className='about-reviewer' data-aos="fade-up" data-aos-duration="1200" >
                    <h2>{title}</h2>
                    <div className='star-div'>
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                    </div>

                </div>
            </div>
            <p className='reviewer-text' data-aos="fade-up" data-aos-duration="1300">
                {description}
            </p>
            <span className="shadow-card"></span>
            <span className="shadow-card2"></span>
        </div>
    )
}

export default Card
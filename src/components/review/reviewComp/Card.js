import React from 'react'
import star from "../../../assets/imgs/icon/star.svg"
import imgReview from "../../../assets/imgs/review/photo.jpg"
function Card({ data }) {
    
        let {title , description} = data
    return (
        <div className='card-review'  >
            <div className='img-name-div' >
                <div className='img-reviewer'>
                    <img src={imgReview} />
                </div>
                <div className='about-reviewer' >
                    <h2>Raco</h2>
                    <div className='star-div'>
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                    </div>

                </div>
            </div>
            <p className='reviewer-text'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            </p>
            <span class="shadow-card"></span>
            <span class="shadow-card2"></span>
        </div>
    )
}

export default Card
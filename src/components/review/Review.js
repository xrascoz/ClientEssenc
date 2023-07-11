import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import { useState, useEffect, useRef } from 'react';

import 'swiper/css';

import star from "../../assets/imgs/icon/star.svg"
import Title from '../title/Title';
import imgReview from "../../assets/imgs/review/photo.jpg"


function Review() {
    let titleObject = {
        "nameTitle": "Review",
        "descriptionTitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
    }


    return (
        <div>
            <div className="container">
                <Title titleObject={titleObject} />
                <div className='review-grid' >
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={3}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        // modules={[Autoplay]}
                        breakpoints={{
                            50: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 1,
                            },
                            1000: {
                                slidesPerView: 2,
                            },
                            1500: {
                                slidesPerView: 2,
                            },
                        }}
                    >

                        <SwiperSlide key="sss">
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
                        </SwiperSlide>
                        <SwiperSlide key="ssss">
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
                                    Lorem Ipsum is simply dummy text of Lorem Ipsum. Lorem Ipsum is a utility element of Lore
                                </p>
                                <span class="shadow-card"></span>
                                <span class="shadow-card2"></span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide key="s">
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
                                    Lorem Ipsum is simply dummy text of Lorem Ipsum. Lorem Ipsum is a utility element of Lore
                                </p>
                                <span class="shadow-card"></span>
                                <span class="shadow-card2"></span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide key="ssssss">
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
                                    Lorem Ipsum is simply dummy text of Lorem Ipsum. Lorem Ipsum is a utility element of Lore
                                </p>
                                <span class="shadow-card"></span>
                                <span class="shadow-card2"></span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide key="sssssss">
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
                                    Lorem Ipsum is simply dummy text of Lorem Ipsum. Lorem Ipsum is a utility element of Lore
                                </p>
                                <span class="shadow-card"></span>
                                <span class="shadow-card2"></span>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div >
    )
}

export default Review
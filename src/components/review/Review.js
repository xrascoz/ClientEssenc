import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import { useState, useEffect, useRef } from 'react';


import 'swiper/css';
import Card from './reviewComp/Card';

import Title from '../title/Title';



function Review() {
    let titleObject = {
        "nameTitle": "Review",
        "descriptionTitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
    }



    let reviewObj = [
        {
            "title": "Rasco",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "nTitle": "Rasco",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
    ]
    console.log(reviewObj)

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
                        {
                            reviewObj.map((data) => {

                                return (
                                    <SwiperSlide >
                                        <Card data={data} />
                                    </SwiperSlide>
                                )
                            })
                        }


                    </Swiper>
                </div>
            </div>
        </div >
    )
}

export default Review
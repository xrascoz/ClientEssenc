import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from "swiper";
import 'swiper/css';


import Card from './reviewComp/Card';

import Title from '../title/Title';
import RightStyle from '../styleElment/RightStyle';



function Review() {
    let titleObject = {
        "nameTitle": "Review",
        "descriptionTitle": "We show you the best reviews we have received from visitors to our partners"
    }



    let reviewObj = [
        {
            "id": 1,
            "title": "Ahmed Mohamed",
            "description": "The first clinic in mental health. Thank you for this creativity"
        },
        {
            "id": 2,
            "title": "Doaa Ahmed",
            "description": "Thank you for your efforts. The staff is the best in health"
        },
        {
            "id": 3,
            "title": "Khaled Ahmed",
            "description": "All thanks to the distinguished medical staff"
        },

        {
            "id": 4,
            "title": "Mohamed Ahmed",
            "description": "Tremendous efforts to improve the psychological state"
        },

    ]


    return (
        <section>

            <RightStyle />
            <div className="container" data-aos="fade-up" data-aos-duration="1200">
                <Title titleObject={titleObject} />

                <Swiper
                    spaceBetween={10}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    breakpoints={{
                        20: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        1000: {
                            slidesPerView: 3,
                        },
                        1500: {
                            slidesPerView: 4,
                        },
                    }}

                >
                    {
                        reviewObj.map((data) => {
                            return (
                                <SwiperSlide key={data.id} >
                                    <Card data={data} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

            </div>
        </section >
    )
}

export default Review
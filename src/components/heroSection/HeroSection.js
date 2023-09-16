import React, { useState } from 'react'
import heroImg2 from "../../assets/imgs/elment/heroImg3.png"
import patient from "../../assets/imgs/elment/patient.png"

import playImg from "../../assets/imgs/icon/play.svg"
import xmark from "../../assets/imgs/icon/xmark.svg"

import company1 from "../../assets/imgs/company/1.svg"
import company2 from "../../assets/imgs/company/2.svg"
import company3 from "../../assets/imgs/company/3.svg"
import company4 from "../../assets/imgs/company/4.svg"
import company5 from "../../assets/imgs/company/5.svg"
import company6 from "../../assets/imgs/company/6.svg"
import company7 from "../../assets/imgs/company/7.svg"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



import { Link } from 'react-router-dom'
import { useRef } from 'react'


function HeroSection() {
    const iframeElement = useRef();


    let [toggle, setToggle] = useState(false)


    let srcIframe = "https://www.youtube.com/embed/rkZl2gsLUp4?si=iobGLkuFfQ9z6Dd7"


    let toggleIframe = (e) => {
        setToggle(!toggle)

    }
    let toggleIframeX = (e) => {
        setToggle(!toggle)
        iframeElement.current.src = srcIframe
    }



    return (
        <main className="main-sec">

            <div className={toggle ? "active-video-pop active" : "active-video-pop"}>
                <span className="closex closex-iframe" onClick={(e) => toggleIframeX(e)}  >
                    <img className="iconDefault" src={xmark} alt="icon" />
                </span>

                <div className="frame-pop-video">
                    <iframe
                        preload="none"
                        ref={iframeElement} title="Demo video" className="absolute h-full w-full rounded-b-md" id="iframe"
                        src={srcIframe}
                        frameBorder="0" allow="autoplay; modestbranding; encrypted-media"></iframe>
                </div>
            </div>
            <div className="container">
                <div className="main-content">
                    <div className="main-text">
                        <div className="title">
                            <div>
                                <h1 data-aos="fade-up" data-aos-duration="1000">Essence of Being</h1>
                                <h2 data-aos="fade-up" data-aos-duration="1200">
                                    Check Your Mental
                                    Health Today

                                </h2>
                            </div>
                            <p data-aos="fade-up" data-aos-duration="1300">
                                Our mission is to enhance mental health through comprehensive therapeutic services, advanced training programs, and expert consultation for individuals, families, and professionals.

                            </p>
                        </div>
                        <div className="get-started-div flex-div-align">
                            <Link to="/book-now" className="button" href="#" data-aos="fade-up" data-aos-duration="1400"> Get Started</Link>
                            <span className="play-video-icon" data-aos="fade-up" data-aos-duration="1500" onClick={(e) => toggleIframe(e)} >
                                <img src={playImg} alt="play" />
                            </span>
                        </div>

                    </div>

                    <div className="website-main-sec">
                        <div className="phone-div-flow-imgs">

                            <div className="pop-img-div pop3">
                                <img src={patient} alt="anime img" data-aos="fade-up" data-aos-duration="1250" />
                            </div>

                            <img alt="phone app" className="hero-img" src={heroImg2}
                                data-aos="fade-up" data-aos-duration="1000"
                            />
                        </div>
                    </div>
                </div>

                 <div className="company-img-partner" data-aos="fade-up" data-aos-duration="1000">
                    <div name-company="IOM" className='company-div-img'> <img src={company1} alt="company-img" /></div>
                    <div name-company="USSOM " className='company-div-img'> <img src={company2} alt="company-img" /></div>
                    <div name-company="MSF " className='company-div-img'> <img src={company3} alt="company-img" /></div>
                    <div name-company="MIDMAR " className='company-div-img'> <img src={company4} alt="company-img" /></div>
                    <div name-company="Heartland Alliance " className='company-div-img'> <img src={company5} alt="company-img" /></div>
                    <div name-company="HIHFAD " className='company-div-img'> <img src={company6} alt="company-img" /></div>
                    <div name-company="MDM" className='company-div-img'> <img src={company7} alt="company-img" /></div>
                </div> 
{/* 
                <div className="company-img-container" data-aos="fade-up" data-aos-duration="1400">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={3}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        data-aos="fade-up" data-aos-duration="1100"
                    >
                        <SwiperSlide>
                            <div name-company="IOM" className='company-div-img'> <img src={company1} alt="company-img" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div name-company="USSOM " className='company-div-img'> <img src={company2} alt="company-img" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div name-company="MSF " className='company-div-img'> <img src={company3} alt="company-img" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div name-company="MIDMAR " className='company-div-img'> <img src={company4} alt="company-img" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div name-company="Heartland Alliance " className='company-div-img'> <img src={company5} alt="company-img" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div name-company="HIHFAD " className='company-div-img'> <img src={company6} alt="company-img" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div name-company="MDM" className='company-div-img'> <img src={company7} alt="company-img" /></div>
                        </SwiperSlide>
                    </Swiper>

                </div> */}
            </div>
        </main>
    )
}

export default HeroSection
import React from 'react'
import heroImg2 from "../../assets/imgs/elment/heroImg2.png"
import brainImg from "../../assets/imgs/icon/brain.svg"
import brain2Img from "../../assets/imgs/icon/brain2.svg"
import vectorImg from "../../assets/imgs/icon/vector.svg"
import playImg from "../../assets/imgs/icon/play.svg"

import company1 from "../../assets/imgs/company/1.svg"
import company2 from "../../assets/imgs/company/2.svg"
import company3 from "../../assets/imgs/company/3.svg"
import company4 from "../../assets/imgs/company/4.svg"
import company6 from "../../assets/imgs/company/6.svg"


function HeroSection() {
    return (
        <main className="main-sec">
            <div className="container">
                <div className="main-content">
                    <div className="main-text">
                        <div className="title">
                            <h1 data-aos="fade-up" data-aos-duration="1000">Essence of Being</h1>
                            <h2 data-aos="fade-up" data-aos-duration="1200">
                                Check Your Dental
                                Health Today
                            </h2>
                            <p data-aos="fade-up" data-aos-duration="1300">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy of
                            </p>
                        </div>
                        <div className="get-started-div flex-div-align">
                            <a className="button" href="#" data-aos="fade-up" data-aos-duration="1400"> Get Started</a>
                            <span className="play-video-icon" data-aos="fade-up" data-aos-duration="1500">
                                <img src={playImg} alt="play" />
                            </span>
                        </div>

                    </div>

                    <div className="website-main-sec">
                        <div className="phone-div-flow-imgs">
                            <div className="pop-img-div pop1">
                                <img src={brainImg} alt="anime img" data-aos="fade-up" data-aos-duration="1250" />
                            </div>
                            <div className="pop-img-div pop2">
                                <img src={brain2Img} alt="anime img" data-aos="fade-up" data-aos-duration="1250" />
                            </div>
                            <div className="pop-img-div pop3">
                                <img src={vectorImg} alt="anime img" data-aos="fade-up" data-aos-duration="1250" />
                            </div>

                            <img alt="phone app" className="hero-img" src={heroImg2}
                                data-aos="fade-up" data-aos-duration="1000"
                            />
                        </div>
                    </div>
                </div>
                <div class="company-img-partner" data-aos="fade-up" data-aos-duration="1400">
                    <div name-company="nana" className='company-div-img'> <img src={company1} alt="company-img" /></div>
                    <div name-company="unifonic" className='company-div-img'> <img src={company2} alt="company-img" /></div>
                    <div name-company="robustagroup" className='company-div-img'> <img src={company3} alt="company-img" /></div>
                    <div name-company="instabug" className='company-div-img'> <img src={company4} alt="company-img" /></div>
                    <div name-company="united" className='company-div-img'> <img src={company6} alt="company-img" /></div>
                </div>
            </div>
        </main>
    )
}

export default HeroSection
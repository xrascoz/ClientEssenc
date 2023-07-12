import React from 'react'
import HeroSection from "../../components/heroSection/HeroSection"
import Services from '../../components/services/Services'
import Team from '../../components/team/Team'
import Review from '../../components/review/Review'
import Blog from '../../components/blog/Blog'
import WhyUs from '../../components/why_us/WhyUs'
import MobileApp from '../../components/mobile_app/MobileApp'
import Contact from '../../components/contact/Contact'

import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <>
            <HeroSection />
            <Services />
            <Review />
            <Team />
            <Blog />
            <WhyUs />
            <MobileApp />
            <Contact />
           
        </>
    )
}

export default Home;
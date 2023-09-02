import React from 'react'
import HeroSection from "../../components/heroSection/HeroSection"
import Services from '../../components/services/Services'
import Team from '../../components/team/Team'
import Review from '../../components/review/Review'
import Blog from '../../components/blog/Blog'
import WhyUs from '../../components/why_us/WhyUs'
import MobileApp from '../../components/mobile_app/MobileApp'
import Contact from '../../components/contact/Contact'

import Project from '../../components/project/Project'



function Home() {
   
    return (
        <>
            <HeroSection />
            <Services limit={true} />
            <Review />
            <Team />
            <WhyUs />
            <Project />
            <MobileApp />
            <Blog />
            <Contact />
        </>
    )
}

export default Home;
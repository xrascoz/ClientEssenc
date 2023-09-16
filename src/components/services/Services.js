

import React from 'react'
import { useState, useEffect } from 'react'
import Title from "../title/Title"
import Card from './servicesCopm/Card'
import serve1 from "../../assets/imgs/icon/brain.svg"
import serve2 from "../../assets/imgs/icon/vector.svg"
import serve3 from "../../assets/imgs/icon/brain2.svg"

import LeftStyle from '../styleElment/LeftStyle'

function Services({ limit }) {

  let titleObject = {
    "nameTitle": "Our services",
    "descriptionTitle": "By relentlessly striving for best practices and established methodologies, we strive to provide an outstanding platform for everyone to reach the pinnacle of mental health."
  }

  let servicesArray = [
   {
      id: 1,
      img: serve1,
      titleServe: "Assessment",
      descriptionServe: "Our Comprehensive Evaluation Process, Encompassing Motor Vehicle Accident (MVA) And Refugee Assessments, Along With General Assessments, Offers A Personalized And In-Depth Understanding Of Your Unique Strengths And Challenges.",
      "classColor": "icon-color1"
    },
    {
      id: 2,
      img: serve2,
      titleServe: "Psychotherapy",
      descriptionServe: "Through Confidential Sessions, Our Skilled Therapists Provide Individual And Family Guidance In Navigating Challenges, Fostering Resilience, And Achieving Emotional Growth.",
      "classColor": "icon-color2"
    },
    {
      id: 3,
      img: serve3,
      titleServe: "Training",
      descriptionServe: "Our Comprehensive Training Programs Empower Mental Health Professionals With In-Depth Skills And Knowledge, Raising The Standards Of Care In The Field.",
      "classColor": "icon-color3"
    },
    {
      id: 4,
      img: serve1,
      titleServe: "Consultation",
      descriptionServe: "We offer expert consultation to therapists and organizations, sharing insights to enhance mental health care and promote positive client outcomes.",
      "classColor": "icon-color1"
    },
    {
      id: 5,
      img: serve2,
      titleServe: "Digital Gateway to Mental Health Training (Budair Access)",
      descriptionServe: "A comprehensive online training platform tailored for both specialized and non-specialized mental health education. Whether you're a seasoned professional seeking advanced knowledge or a concerned individual wanting to understand more about mental health, Budair Access is your trusted resource.",
      "classColor": "icon-color2"
    },
    {
      id: 6,
      img: serve3,
      titleServe: "Cognitive Psychology",
      descriptionServe: "We Offer Expert Consultation To Therapists And Organizations, Sharing Insights To Enhance Mental Health Care And Promote Positive Client Outcomes.",
      "classColor": "icon-color3"
    }
  ]


  let [limitArray, setLimitArray] = useState([])



  useEffect(() => {
    if (limit) {
      setLimitArray(servicesArray.slice(0, 6))
    } else {
      setLimitArray(servicesArray)

    }
  }, [])

  return (
    <section  className='our-services' >
      <LeftStyle />
      <div className="container">
        <Title titleObject={titleObject} />
        <div className="services-grid grid-style">
          {limitArray.map((data) => {
            return (
              <Card data={data} key={data.id} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services





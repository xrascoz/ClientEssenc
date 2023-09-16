import React from 'react'

import Card from './whyUsComp/Card'
import Title from '../title/Title'

import RightStyle from '../styleElment/RightStyle'

function WhyUs() {

  let titleObject = {
    "nameTitle": "Why Us",
    "descriptionTitle": "We Care: Your mental well-being is not just a profession for us—it's a passion. Our team genuinely cares about your journey, and we're dedicated to supporting you every step of the way."
  }

  let whyUsData = [
       {
      id: 1,
      title: "Culturally Diverse and Multilingual Team",
      description: "Our team comprises registered psychotherapist, assistants, and consultants who are fluent in both Arabic and English. This linguistic diversity ensures effective communication and a deep understanding of your needs.",
    },
    {
      id: 2,
      title: "Culturally Sensitive Approach",
      description: "Our culturally sensitive approach respects your background, beliefs, and values, ensuring a safe and comfortable environment for your healing journey.",
    },
    {
      id: 3,
      title: "Evidence-Based Excellence",
      description: "We integrate proven therapeutic approaches and modern insights to offer you evidence-based solutions that promote lasting well-being.",
    },
    {
      id: 4,
      title: "Expertise in Training",
      description: "We have extensive experience conducting specialized mental health training for professionals, NGOs, and individuals worldwide. This background ensures that our guidance is rooted in the latest practices and techniques.",
    },
    {
      id: 5,
      title: "Expert Consultation",
      description: "We offer consultation that goes beyond theory, delivering practical and effective strategies for better mental health outcomes. We're dedicated to providing you with insights and guidance that have a tangible, positive impact on your mental health services or practice.",
    }
    
  ]
  return (
    <section>
      <RightStyle />
      <div className="container">
        <Title titleObject={titleObject} />
        <div className="grid-why-us">
          {
            whyUsData.map((data) => {
              return (
                <Card whyUsData={data} key={data.id} />
              )
            })
          }

        </div>
      </div>
    </section>
  )
}

export default WhyUs
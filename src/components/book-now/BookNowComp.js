import React from 'react'
import Title from '../title/Title'
import Card from './book-nowComp/Card'

function BookNowComp() {
  let titleObject = {
    "nameTitle": "Booking Now",
    "descriptionTitle": "Book now your treatment session in the fastest and simplest way."
  }

  let bookNowServiceObject = [
    {
      id: "1",
      name: "consultation",
      price: "Free",
      time: "20 minutes",
      advantages: ["Therapist Introduction", "Client's Issues", "Therapist Insights", "Approach Preview", "Next Steps"]
    },
    {
      id: "2",
      name: "Initial Assessment",
      price: "800",
      time: "4 hours",
      advantages: ["Information Gathering", "Psychometric Testing", "Detailed Treatment Plan", "Detailed Report"]
    },
    {
      id: "3",
      name: "Psychotherapy Session",
      price: "150",
      time: "60 minutes",
      advantages: ["Evidence-Based Therapies", "Safe Emotional Space", "Periodic Plan Reviews", "Addressing Concerns", "Enhancing Self-Awareness and self-regulation", "Self & Relational Growth", "Progress Monitoring"]
    },
    {
      id: "4",
      name: "Family Therapy",
      price: "270",
      time: "90 minutes",
      advantages: ["Proven Models", "Family Dynamics Insight", "Safe Open Forum", "Selective Participation", "Positive Interaction Boost", "Conflict Resolution Training", "Communication Skills", "Role Re-definition", "Systemic Perspective"]
    },
    {
      id: "4",
      name: "Supervision",
      price: "100",
      time: "90 minutes",
      advantages: ["Structured Sessions", "Constructive Feedback", "Case Discussions", "Skill Development", "Ethical Guidance", "Emotional Support", "Professional Development Planning", "Networking and Collaboration"]
    },


  ]


  return (
    <div className='container' >
      <Title titleObject={titleObject} />
      <div className='grid-book-now grid-style' >
        {
          bookNowServiceObject.map((data) => {
            return (
              <Card data={data}  key={data.id}/>
            )
          })
        }
      </div>
    </div>
  )

}

export default BookNowComp
import React from 'react'
import Title from '../title/Title'
import Card from './book-nowComp/Card'

function BookNowComp() {
  let titleObject = {
    "nameTitle": "Booking Now",
    "descriptionTitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
  }

  let bookNowServiceObject = [
    {
      id: "1",
      name: "consultation",
      price: "Free",
      time: "20 minutes",
      advantages: ["zoom 30 20 minutes", "five centuries, but", "many centuries", "Ipsum is simply dummy", "Lorem Ipsum has been"]
    },
    {
      id: "2",
      name: "Initial Assessment",
      price: "800",
      time: "4 hours",
      advantages: ["zoom 30 20 minutes", "five centuries, but", "many centuries", "Ipsum is simply dummy", "Lorem Ipsum has been"]
    },
    {
      id: "3",
      name: "Psychotherapy Session",
      price: "150",
      time: "60 minutes",
      advantages: ["zoom 30 20 minutes", "five centuries, but", "many centuries", "Ipsum is simply dummy", "Lorem Ipsum has been", "Ipsum is simply dummy"]
    },
    {
      id: "4",
      name: "Family Therapy",
      price: "270",
      time: "90 minutes",
      advantages: ["zoom 30 20 minutes", "five centuries, but", "many centuries", "Ipsum is simply dummy", "Lorem Ipsum has been", "Ipsum is simply dummy", "Lorem Ipsum has been"]
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
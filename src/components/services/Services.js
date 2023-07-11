

import React from 'react'
import { useState } from 'react'
import Title from "../title/Title"
import Card from './servicesCopm/Card'
import serve1 from "../../assets/imgs/icon/brain.svg"
import serve2 from "../../assets/imgs/icon/vector.svg"
import serve3 from "../../assets/imgs/icon/brain2.svg"

function Services() {

  let titleObject = {
    "nameTitle": "Our services",
    "descriptionTitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
  }

  let servicesArray = [
    {
      id: 1,
      img: serve1,
      titleServe: "Dark Web Monitoring",
      descriptionServe: "With Our Automated Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Prin Scrambled It To Make",
      "classColor": "icon-color1"
    },
    {
      id: 2,
      img: serve2,
      titleServe: "Attack Surface Discovery",
      descriptionServe: "Automated Security Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Prin Scrambled It To Make",
      "classColor": "icon-color2"
    },
    {
      id: 3,
      img: serve3,
      titleServe: "Security Assessment",
      descriptionServe: "Information Security Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Prin Scrambled It To Make",
      "classColor": "icon-color3"
    },
    {
      id: 4,
      img: serve1,
      titleServe: "Dark Web Monitoring",
      descriptionServe: "With Our Automated Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Prin Scrambled It To Make",
      "classColor": "icon-color1"
    },
    {
      id: 5,
      img: serve2,
      titleServe: "Dark Web Monitoring",
      descriptionServe: "With Our Automated Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Prin Scrambled It To Make",
      "classColor": "icon-color2"
    },
    {
      id: 6,
      img: serve3,
      titleServe: "Dark Web Monitoring",
      descriptionServe: "With Our Automated Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Prin Scrambled It To Make",
      "classColor": "icon-color3"
    },
  ]

  return (
    <section>
      <div className="container">
        <Title titleObject={titleObject} />
        <div className="services-grid grid-style">
          {servicesArray.map((data) => {
            return (
              <Card data={data} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
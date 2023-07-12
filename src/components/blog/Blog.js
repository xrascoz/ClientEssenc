import React from 'react'
import Title from "../title/Title"
import Card from './blogComp.js/Card'

import image from "../../assets/imgs/article/image.webp"

function Blog() {
    let titleObject = {
        "nameTitle": "Blog",
        "descriptionTitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
      }
    let servicesArray = [
        {
          id: 1,
          img: image,
          titleServe: "Dark Web Monitoring",
          descriptionServe: "With Our Automated Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Prin Scrambled It To Make",
          "classColor": "icon-color1"
        },
        {
          id: 2,
          img: image,
          titleServe: "Attack Surface Discovery",
          descriptionServe: " Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Prin Scrambled It To Make",
          "classColor": "icon-color2"
        },
        {
          id: 3,
          img: image,
          titleServe: "Security Assessment",
          descriptionServe: "Information Security Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Prin Scrambled It To Make",
          "classColor": "icon-color3"
        },
        {
          id: 4,
          img: image,
          titleServe: "Dark Web Monitoring",
          descriptionServe: "With Our Automated Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Prin Scrambled It To Make",
          "classColor": "icon-color1"
        },
        {
          id: 5,
          img: image,
          titleServe: "Dark Web Monitoring",
          descriptionServe: "With Our Automated Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Prin Scrambled It To Make",
          "classColor": "icon-color2"
        },
        {
          id: 6,
          img: image,
          titleServe: "Dark Web Monitoring",
          descriptionServe: "With Our Automated Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Prin Scrambled It To Make",
          "classColor": "icon-color3"
        },
    ]
    
  return (
      <div className='container'>
          <Title titleObject={titleObject} />
          <div className="blog-grid grid-style">
          {servicesArray.map((data) => {
            return (
              <Card data={data} />
            )
          })}
        </div>
    </div>
  )
}

export default Blog
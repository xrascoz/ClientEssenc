import React from 'react'
import Title from "../title/Title"
import Card from './blogComp.js/Card'
import axios from 'axios'
import { useEffect, useState } from 'react'

import image from "../../assets/imgs/article/image.webp"


function Blog() {

  let [dataBlog, setDataBlog] = useState([])
  console.log(dataBlog)

  useEffect(() => {

    axios.get("http://localhost:5000/api/blog-home").then((response) => {
      setDataBlog(response.data)
    })

  }, [])


  

  let titleObject = {
    "nameTitle": "Blog",
    "descriptionTitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
  }


  return (
    <div className='container'>
      <Title titleObject={titleObject} />
      <div className="blog-grid grid-style">
        {dataBlog.map((data) => {
          return (
            <Card data={data} />
          )
        })}
      </div>
    </div>
  )
}

export default Blog
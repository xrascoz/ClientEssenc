import React from 'react'
import Title from "../title/Title"
import Card from './blogComp.js/Card'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// import { BASE_URL } from "../../server/server"
import LeftStyle from '../styleElment/LeftStyle'
function Blog() {
  let BASE_URL = process.env.REACT_APP_API_LINK
  const location = useLocation().pathname;
  let [dataBlog, setDataBlog] = useState([])

  useEffect(() => {
    if (location == "/") {
      axios.get(`${BASE_URL}/api/blog-home`).then((response) => {
        setDataBlog(response.data)
      })
    } else {
      axios.get(`${BASE_URL}/api/blog`).then((response) => {
        setDataBlog(response.data)
      })
    }
  }, [])

  let titleObject = {
    "nameTitle": "Blog",
    "descriptionTitle": "You can view the latest posts published by our medical staff in terms of useful mental health blogs."
  }

  return (
    <section>
       <LeftStyle />
      <div className='container'>
        <Title titleObject={titleObject} />
        <div className="blog-grid grid-style">
          {dataBlog.map((data) => {
            return (
              <Card data={data} key={data._id} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Blog
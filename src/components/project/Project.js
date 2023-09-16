import React from 'react'
import Title from "../title/Title"
import Card from './projectComp.js/Card'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// import { BASE_URL } from "../../server/server"
import LeftStyle from '../styleElment/LeftStyle'
function Project() {
  let BASE_URL = process.env.REACT_APP_API_LINK
  const location = useLocation().pathname;
  let [dataProject, setDataProject] = useState([])

  useEffect(() => {
    if (location == "/") {
      axios.get(`${BASE_URL}/api/project-home`).then((response) => {
        setDataProject(response.data)
      })
    } else {
      axios.get(`${BASE_URL}/api/project`).then((response) => {
        setDataProject(response.data)
      })
    }
  }, [])

  let titleObject = {
    "nameTitle": "Project",
    "descriptionTitle": "You can view our projects that have contributed to the development of mental health."
  }

  return (
    <section>
       <LeftStyle />
      <div className='container'>
        <Title titleObject={titleObject} />
        <div className="blog-grid grid-style">
          {dataProject.map((data) => {
            return (
              <Card data={data} key={data._id} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Project
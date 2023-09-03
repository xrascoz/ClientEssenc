import React from 'react'
import Card from './ProjectComp/Card'
import axios from 'axios'
import { useEffect, useState } from 'react'


function ProjectDashboard({updateUi , setUpdateUi , setErrorAlertMessage , setSuccessAlertMessage , setToggleAlertError , setToggleAlertSucsses , editProjectFunc}) {

  let BASE_URL = process.env.REACT_APP_API_LINK
  

  let [dataProject, setDataProject] = useState([])


  useEffect(() => {
    axios.get(`${BASE_URL}/api/project`).then((response) => {
      setDataProject(response.data)
    })

  }, [updateUi])


  return (
    <div className='container'>
      <div className="blog-grid grid-style">
        {dataProject.map((data) => {
          return (
            <Card data={data} key={data._id} setUpdateUi={setUpdateUi} setSuccessAlertMessage={setSuccessAlertMessage} setErrorAlertMessage={setErrorAlertMessage} setToggleAlertError={setToggleAlertError} setToggleAlertSucsses={setToggleAlertSucsses} editProjectFunc={editProjectFunc} />
          )
        })}
      </div>
    </div>
  )
}

export default ProjectDashboard
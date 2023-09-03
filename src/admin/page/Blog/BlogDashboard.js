import React from 'react'
import Card from './BlogComp/Card'
import axios from 'axios'
import { useEffect, useState } from 'react'


function BlogDashboard({updateUi , setUpdateUi , setErrorAlertMessage , setSuccessAlertMessage , setToggleAlertError , setToggleAlertSucsses , editBlogFunc}) {

  
  let BASE_URL = process.env.REACT_APP_API_LINK

  let [dataBlog, setDataBlog] = useState([])


  useEffect(() => {
    axios.get(`${BASE_URL}/api/blog`).then((response) => {
      setDataBlog(response.data)
    })

  }, [updateUi])


  return (
    <div className='container'>
      <div className="blog-grid grid-style">
        {dataBlog.map((data) => {
          return (
            <Card data={data} key={data._id} setUpdateUi={setUpdateUi} setSuccessAlertMessage={setSuccessAlertMessage} setErrorAlertMessage={setErrorAlertMessage} setToggleAlertError={setToggleAlertError} setToggleAlertSucsses={setToggleAlertSucsses} editBlogFunc={editBlogFunc} />
          )
        })}
      </div>
    </div>
  )
}

export default BlogDashboard
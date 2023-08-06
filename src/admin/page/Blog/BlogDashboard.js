import React from 'react'
import Card from './BlogComp/Card'
import axios from 'axios'
import { useEffect, useState } from 'react'

function BlogDashboard() {


 



  let [dataBlog, setDataBlog] = useState([])
  console.log(dataBlog)

  useEffect(() => {
    axios.get("http://localhost:5000/api/blog").then((response) => {
      setDataBlog(response.data)
    })

  }, [])


  return (
    <div className='container'>
      <div className="blog-grid grid-style">
        {dataBlog.map((data) => {
          return (
            <Card data={data} key={data._id} />
          )
        })}
      </div>
    </div>
  )
}

export default BlogDashboard
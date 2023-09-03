import React from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'
import { useEffect, useState } from 'react'

function BlogDetails() {
    let BASE_URL = process.env.REACT_APP_API_LINK
    const { id } = useParams()
    let [dataBlog, setDataBlog] = useState([])
    let { _id, title, cover, content } = dataBlog
    useEffect(() => {
        axios.get(`${BASE_URL}/api/blog/${id}`).then((response) => {
            setDataBlog(response.data)
           
        })
       
    }, [])
    return (
        <div className='container'>

            <div className='blog-article' >
                <div className='date-title'>
                    <h1>
                        {title}
                    </h1>
                </div>
                <img className='img-blog'  src={cover} />
                <div dangerouslySetInnerHTML={{ __html: content }} className='div-content ' />
            </div>
        </div>
    )
}

export default BlogDetails
import React from 'react'
import blogImg from "../../assets/imgs/article/blogimg.png"
import { useParams } from 'react-router-dom'
import {BASE_URL} from "../../server/server"

import axios from 'axios'
import { useEffect, useState } from 'react'

function BlogDetails() {
    const { id } = useParams()
    let [dataBlog, setDataBlog] = useState([])
    let { _id, title, summary, cover, content } = dataBlog
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
                <img className='img-blog' src={`${BASE_URL}/${cover}`} />
                <div dangerouslySetInnerHTML={{ __html: content }} className='div-content' />
            </div>
        </div>
    )
}

export default BlogDetails
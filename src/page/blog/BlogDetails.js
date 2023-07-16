import React from 'react'
import blogImg from "../../assets/imgs/article/blogimg.png"
import { useParams } from 'react-router-dom'

import axios from 'axios'
import { useEffect, useState } from 'react'

function BlogDetails() {

    const { id } = useParams()
    let [dataBlog, setDataBlog] = useState([])
    console.log(dataBlog)
    let { _id, title, summary, cover, content } = dataBlog
    console.log(content)
    console.log(title)
    useEffect(() => {
        axios.get(`http://localhost:5000/api/blog/${id}`).then((response) => {
            setDataBlog(response.data)
           
        })
       
    }, [])
    return (
        <div className='container'>

            <div className='blog-article' >
                <div className='date-title'>
                    <p>19 Jan 2022</p>
                    <h1>
                        {title}
                    </h1>
                </div>

                <img className='img-blog' src={`http://localhost:5000/${cover}`} />
                <div dangerouslySetInnerHTML={{ __html: content }} className='div-content' />
            </div>
        </div>
    )
}

export default BlogDetails
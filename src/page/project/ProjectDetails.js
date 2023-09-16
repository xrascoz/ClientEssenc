import React from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'
import { useEffect, useState } from 'react'

function ProjectDetails() {
    let BASE_URL = process.env.REACT_APP_API_LINK
    const { id } = useParams()
    let [dataProject, setDataProject] = useState([])

    let { _id, title, cover, content , youtubeLink } = dataProject

    useEffect(() => {
        axios.get(`${BASE_URL}/api/project/${id}`).then((response) => {
            setDataProject(response.data)
           
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
                <div dangerouslySetInnerHTML={{ __html: content }} className='div-content' />

                preload="none"<iframe
                
                    title="Demo video" className="absolute h-full w-full rounded-b-md" id="iframe"
                        src={youtubeLink}
                        frameBorder="0" allow="autoplay; modestbranding; encrypted-media"></iframe>

            </div>
        </div>
    )
}

export default ProjectDetails
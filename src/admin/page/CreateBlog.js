import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios"

import { useState, useEffect } from 'react';



function CreateBlog() {

    let [title, setTitle] = useState("")
    let [summary, setSummary] = useState("")
    let [cover, setCover] = useState("")
    let [content, setContent] = useState("")

    // post data
    let postDataFunc = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("title", title)
        formData.append("summary", summary)
        formData.append("image", cover)
        formData.append("content", content)
        axios.post("http://localhost:5000/api/blog", formData).then((response) => {
            console.log(response);
        })
    }


    return (
        <div className='main-div' >
            <div className='container-admin'>
                <form  onSubmit={(e) => (postDataFunc(e))}>
                    <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input type="summary" placeholder='summary' value={summary} onChange={(e) => setSummary(e.target.value)} />
                    <input type="file" onChange={(e) => setCover(e.target.files[0])} />

                    <ReactQuill value={content} onChange={setContent} />;

                    <button type="submit" >Create Blog</button>
                </form>
            </div>
        </div>
    )
}

export default CreateBlog
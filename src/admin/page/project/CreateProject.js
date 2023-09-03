import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios"

// import { BASE_URL } from "../../../server/server"

import { useState, useEffect } from 'react';


import ErrorAlert from '../../../components/alertCopm/ErrorAlert';
import SuccessAlert from '../../../components/alertCopm/SuccessAlert'

function CreateProject({ setUpdateUi, editProjectState }) {
    let BASE_URL = process.env.REACT_APP_API_LINK
    let [Edit, idEdit, titleEdit, summaryEdit, coverEdit, contentEdit , youtubeLinkEdit] = editProjectState

    let [editToggle , setEditToggle] = useState(Edit)

    let [titleNew, setTitleNew] = useState(titleEdit)
    let [summaryNew, setSummaryNew] = useState(summaryEdit)
    let [coverNew, setCoverNew] = useState("")
    let [contentNew, setContentNew] = useState(contentEdit)
    let [youtubeLinkNew, setYoutubeLinkNew] = useState(youtubeLinkEdit)
    useEffect(() => {
        setTitleNew(titleEdit);
        setSummaryNew(summaryEdit);
        setContentNew(contentEdit);
        setYoutubeLinkNew(youtubeLinkEdit);
        setEditToggle(Edit);
    }, [titleEdit]);

    let [title, setTitle] = useState("")
    let [summary, setSummary] = useState("")
    let [cover, setCover] = useState("")
    let [content, setContent] = useState("")
    let [youtubeLink, setYoutubeLink] = useState("")
  

    let [successAlertMessage, setSuccessAlertMessage] = useState("")
    let [toggleAlertSucsses, setToggleAlertSucsses] = useState(false)

    let [errorAlertMessage, setErrorAlertMessage] = useState("")
    let [toggleAlertError, setToggleAlertError] = useState(false)

    // post data
    let postProjectFunc = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("title", title)
        formData.append("summary", summary)
        formData.append("image", cover)
        formData.append("content", content)
        formData.append("youtubeLink", youtubeLink)
        axios.post(`${BASE_URL}/api/project`, formData).then((response) => {
            if (response.data.error) {
                setErrorAlertMessage(response.data.error)
                setToggleAlertError(true)
                setTimeout(() => {
                    setToggleAlertError(false)
                }, 5000)

            } else {
                setSuccessAlertMessage(response.data.success)
                setToggleAlertSucsses(true)
                setTimeout(() => {
                    setToggleAlertSucsses(false)
                }, 5000)
                setUpdateUi(prev => (!prev))
                setTitle("")
                setSummary("")
                setCover("")
                setContent("")
                setYoutubeLink("")
            }
        })
    }
    let updateProject = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("title", titleNew)
        formData.append("summary", summaryNew)
        formData.append("image", coverNew)
        formData.append("content", contentNew)
        formData.append("youtubeLink", youtubeLinkNew)
        axios.put(`${BASE_URL}/api/project/${idEdit}`, formData).then((response) => {
            if (response.data.error) {
                setErrorAlertMessage(response.data.error)
                setToggleAlertError(true)
                setTimeout(() => {
                    setToggleAlertError(false)
                }, 5000)

            } else {
                setSuccessAlertMessage(response.data.success)
                setToggleAlertSucsses(true)
                setTimeout(() => {
                    setToggleAlertSucsses(false)
                }, 5000)
                setUpdateUi(prev => (!prev))
                setTitle("")
                setSummary("")
                setCover("")
                setContent("")
                setYoutubeLink("")
                setEditToggle(false)
            }
        })
    }


    return (
        <div className='main-div' >
            <ErrorAlert AlertMessage={errorAlertMessage} toggleAlert={toggleAlertError} />
            <SuccessAlert AlertMessage={successAlertMessage} toggleAlert={toggleAlertSucsses} />

            <div className='container-admin'>

                {
                    editToggle ? <form onSubmit={(e) => (updateProject(e))}>
                        <input type="text" placeholder='Title' value={titleNew} onChange={(e) => setTitleNew(e.target.value)} />
                        <input type="text" placeholder='summary' value={summaryNew} onChange={(e) => setSummaryNew(e.target.value)} />
                        <input type="text" placeholder='youtube Link' value={youtubeLinkNew} onChange={(e) => setYoutubeLinkNew(e.target.value)} />
                        <input type="file" onChange={(e) => setCoverNew(e.target.files[0])} />
                        <ReactQuill value={contentNew} onChange={setContentNew} />;
                        <button type="submit" className='button' >Update Project</button>
                    </form> : <form onSubmit={(e) => (postProjectFunc(e))}>
                        <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} required />
                        <input type="text" placeholder='summary' value={summary} onChange={(e) => setSummary(e.target.value)} required />
                        <input type="text" placeholder='youtube Link' value={youtubeLink} onChange={(e) => setYoutubeLink(e.target.value)} required />
                        <input type="file" onChange={(e) => setCover(e.target.files[0])} required/>
                        <ReactQuill value={content} onChange={setContent} required />;
                        <button type="submit" className='button' >Create Project</button>
                    </form>

                }

            </div>

        </div>
    )
}

export default CreateProject
import React from 'react'

import CreateBlog from './CreateBlog';
import BlogDashboard from './BlogDashboard';
import ErrorAlert from '../../../components/alertCopm/ErrorAlert';
import SuccessAlert from '../../../components/alertCopm/SuccessAlert'
import { useState } from 'react';

function BlogAddNew() {
    let [updateUi, setUpdateUi] = useState(false)

    let [successAlertMessage, setSuccessAlertMessage] = useState("")
    let [toggleAlertSucsses, setToggleAlertSucsses] = useState(false)

    let [errorAlertMessage, setErrorAlertMessage] = useState("")
    let [toggleAlertError, setToggleAlertError] = useState(false)

    let [Edit, setEdit] = useState(false)
    let [idEdit, setIdEdit] = useState("")
    let [titleEdit, setTitleEdit] = useState("")
    let [summaryEdit, setSummaryEdit] = useState("")
    let [coverEdit, setCoverEdit] = useState("")
    let [contentEdit, setContentEdit] = useState("")

    let editBlogState = [Edit, idEdit, titleEdit, summaryEdit, coverEdit, contentEdit]

    let editBlogFunc = (Edit, id, title, summary, cover, content) => {
        setEdit(Edit)
        setIdEdit(id)
        setTitleEdit(title)
        setSummaryEdit(summary)
        setCoverEdit(cover)
        setContentEdit(content)
    }

    return (

        <div className='content-dashboard' >
            <ErrorAlert AlertMessage={errorAlertMessage} toggleAlert={toggleAlertError} />
            <SuccessAlert AlertMessage={successAlertMessage} toggleAlert={toggleAlertSucsses} />
            <CreateBlog setUpdateUi={setUpdateUi} editBlogState={editBlogState} />
            <BlogDashboard setUpdateUi={setUpdateUi} updateUi={updateUi} setSuccessAlertMessage={setSuccessAlertMessage} setErrorAlertMessage={setErrorAlertMessage} setToggleAlertError={setToggleAlertError} setToggleAlertSucsses={setToggleAlertSucsses} editBlogFunc={editBlogFunc} />
        </div >

    )
}

export default BlogAddNew
import React from 'react'

import CreateProject from './CreateProject';
import ProjectDashboard from './ProjectDashboard';
import ErrorAlert from '../../../components/alertCopm/ErrorAlert';
import SuccessAlert from '../../../components/alertCopm/SuccessAlert'
import { useState } from 'react';

function Project() {
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
    let [youtubeLinkEdit, setYoutubeLinkEdit] = useState("")

    let editProjectState = [Edit, idEdit, titleEdit, summaryEdit, coverEdit, contentEdit, youtubeLinkEdit]

    let editProjectFunc = (Edit, id, title, summary, cover, content, youtubeLink) => {
        setEdit(Edit)
        setIdEdit(id)
        setTitleEdit(title)
        setSummaryEdit(summary)
        setCoverEdit(cover)
        setContentEdit(content)
        setYoutubeLinkEdit(youtubeLink)
    }

    return (
            <div className='content-dashboard' >
                <ErrorAlert AlertMessage={errorAlertMessage} toggleAlert={toggleAlertError} />
                <SuccessAlert AlertMessage={successAlertMessage} toggleAlert={toggleAlertSucsses} />
                <CreateProject setUpdateUi={setUpdateUi} editProjectState={editProjectState} />
                <ProjectDashboard setUpdateUi={setUpdateUi} updateUi={updateUi} setSuccessAlertMessage={setSuccessAlertMessage} setErrorAlertMessage={setErrorAlertMessage} setToggleAlertError={setToggleAlertError} setToggleAlertSucsses={setToggleAlertSucsses} editProjectFunc={editProjectFunc} />
            </div >
    )
}

export default Project
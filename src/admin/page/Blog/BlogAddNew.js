import React from 'react'
import Navpar from '../../components/navpar/Navpar'
import Header from '../../components/header/Header';
import HeadOfSec from '../../components/head-of-sec/HeadOfSec';
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

    return (
        <div className='grid-dashboard'>
            <ErrorAlert AlertMessage={errorAlertMessage} toggleAlert={toggleAlertError} />
            <SuccessAlert AlertMessage={successAlertMessage} toggleAlert={toggleAlertSucsses} />
            <Navpar />
            <div className='content-dashboard' >
                <Header />
                <HeadOfSec />
                <CreateBlog setUpdateUi={setUpdateUi} />
                <BlogDashboard setUpdateUi={setUpdateUi} updateUi={updateUi} setSuccessAlertMessage={setSuccessAlertMessage} setErrorAlertMessage={setErrorAlertMessage} setToggleAlertError={setToggleAlertError} setToggleAlertSucsses={setToggleAlertSucsses}  />
            </div >
        </div >
    )
}

export default BlogAddNew
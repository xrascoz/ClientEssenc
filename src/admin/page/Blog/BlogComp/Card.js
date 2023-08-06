import React from 'react'

import { Link } from 'react-router-dom'
import editIcon from "../../../../assets/imgs/icon/edit.svg"
import trashIcon from "../../../../assets/imgs/icon/trash.svg"

import axios from "axios"
import { useState, useEffect } from 'react';


import ErrorAlert from '../../../../components/alertCopm/ErrorAlert';
import SuccessAlert from '../../../../components/alertCopm/SuccessAlert'




function Card({ data }) {
  let { _id, title, summary, cover, content } = data


  let [successAlertMessage, setSuccessAlertMessage] = useState("")
  let [toggleAlertSucsses, setToggleAlertSucsses] = useState(false)

  let [errorAlertMessage, setErrorAlertMessage] = useState("")
  let [toggleAlertError, setToggleAlertError] = useState(false)

  let DeleteBlog = (e) => {
    e.preventDefault()
    axios.delete(`http://localhost:5000/api/blog/${_id}`).then((response) => {
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
      }
    })
  }

  return (
    <div className="serv card "   >
      <ErrorAlert AlertMessage={errorAlertMessage} toggleAlert={toggleAlertError} />
      <SuccessAlert AlertMessage={successAlertMessage} toggleAlert={toggleAlertSucsses} />
      <Link className="a-img" to={`/blog/${_id}`} >
        <img alt="img" loading="lazy" src={`http://localhost:5000/${cover}`} />
      </Link>
      <div className="content-serv content-card">
        <Link to={`/blog/${_id}`}>
          <h1 className="">{title} </h1>
        </Link>
        <p className="">{summary}</p>
      </div>
      <div className='edit-trash-icon' >
        {/* <div className='icon-img-blog' ><img src={editIcon} alt='editIcon' /></div> */}
        <div className='icon-img-blog' onClick={(e) => DeleteBlog(e)} > <img src={trashIcon} alt='trashIcon' /></div>
      </div>
    </div>
  )
}

export default Card
import React from 'react'

import { Link } from 'react-router-dom'
import editIcon from "../../../../assets/imgs/icon/edit.svg"
import trashIcon from "../../../../assets/imgs/icon/trash.svg"

import axios from "axios"

// import { BASE_URL } from "../../../../server/server"



function Card({ data, setUpdateUi, setErrorAlertMessage, setSuccessAlertMessage, setToggleAlertError, setToggleAlertSucsses, editBlogFunc }) {
  let { _id, title, summary, cover, content } = data

  let BASE_URL = process.env.REACT_APP_API_LINK


  let DeleteBlog = (e) => {
    e.preventDefault()
    axios.delete(`${BASE_URL}/api/blog/${_id}`).then((response) => {
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
      }
    })
  }

  return (
    <div className="serv card "   >

      <Link className="a-img" to={`/blog/${_id}`} >
        <img alt="img" loading="lazy" src={cover} />
      </Link>
      <div className="content-serv content-card">
        <Link to={`/blog/${_id}`}>
          <h1 className="">{title} </h1>
        </Link>
        <p className="">{summary}</p>
      </div>
      <div className='edit-trash-icon' >
        <div className='icon-img-blog editIcon' onClick={(e) => editBlogFunc(true, _id, title, summary, cover, content)} ><img src={editIcon} alt='editIcon' /></div>
        <div className='icon-img-blog trashIcon' onClick={(e) => DeleteBlog(e)} > <img src={trashIcon} alt='trashIcon' /></div>
      </div>
    </div>
  )
}

export default Card
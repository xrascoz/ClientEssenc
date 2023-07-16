import React from 'react'

import { Link } from 'react-router-dom'

function Card({ data }) {
  let { _id, title, summary, cover, content } = data
  console.log(cover)



  return (
    <div className="serv card " data-aos="fade-up" data-aos-duration="1000"  >
      <Link className="a-img" to={`/blog/${_id}`} data-aos="fade-up" data-aos-duration="1100">
        <img alt="img" loading="lazy" src={`http://localhost:5000/${cover}`} />
      </Link>
      <div className="content-serv content-card">
        <Link to={`/blog/${_id}`}>
          <h1 data-aos="fade-up" data-aos-duration="1200" className="">{title} </h1>
        </Link>
        <p data-aos="fade-up" data-aos-duration="1300" className="">{summary}</p>
      </div>
      <span className="shadow-card"></span>
      <span className="shadow-card2"></span>
    </div>
  )
}

export default Card
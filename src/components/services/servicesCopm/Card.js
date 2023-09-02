import React from 'react'
import { Link } from 'react-router-dom'


function Card({ data }) {


  let { id, img, titleServe, descriptionServe, classColor } = data


  return (
    <div className="serv card " data-aos="fade-up" data-aos-duration="1000">
      <Link to={`/services-details/${id}`}>  <div className={"icon-serv icon-card " + classColor} data-aos="fade-up" data-aos-duration="1100">
        <img alt="img" loading="lazy" src={img} />
      </div>
      </Link>
      <div className="content-serv content-card">
        <Link to={`/services-details/${id}`}> <h1 data-aos="fade-up" data-aos-duration="1200" className="">{titleServe}
        </h1>
        </Link>
        <p data-aos="fade-up" data-aos-duration="1300" className="">{descriptionServe}</p>
      </div>
      <span className="shadow-card"></span>
      <span className="shadow-card2"></span>
    </div>
  )
}

export default Card
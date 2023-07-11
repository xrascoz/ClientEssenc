import React from 'react'

function Card({ data }) {


  let { img, titleServe, descriptionServe, classColor } = data


  return (
    <div className="serv card " data-aos="fade-up" data-aos-duration="1000">
      <div className={"icon-serv icon-card " + classColor} data-aos="fade-up" data-aos-duration="1100">
        <img alt="img" loading="lazy" src={img} />
      </div>
      <div className="content-serv content-card">
        <h1 data-aos="fade-up" data-aos-duration="1200" className="">{titleServe}
        </h1>
        <p data-aos="fade-up" data-aos-duration="1300" className="">{descriptionServe}</p>
      </div>
      <span className="shadow-card"></span>
      <span className="shadow-card2"></span>
    </div>
  )
}

export default Card
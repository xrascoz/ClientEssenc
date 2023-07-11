import React from 'react'

function Card({ data }) {
  let { img, titleServe, descriptionServe } = data

 

  return (
    <div className="serv card " data-aos="fade-up" data-aos-duration="1000"  >
      <a className="a-img" data-aos="fade-up" data-aos-duration="1100">
        <img alt="img" loading="lazy" src={img} />
      </a>
      <div className="content-serv content-card">
        <a href='#'>  <h1 data-aos="fade-up" data-aos-duration="1200" className="">{titleServe}
        </h1></a>
        <p data-aos="fade-up" data-aos-duration="1300" className="">{descriptionServe}</p>
      </div>
      <span className="shadow-card"></span>
      <span className="shadow-card2"></span>
    </div>
  )
}

export default Card
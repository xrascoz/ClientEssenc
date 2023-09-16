import React from 'react'
import instagram from '../../../assets/imgs/icon/instagram.svg'
import youtube from '../../../assets/imgs/icon/youtube.svg'
import linkedinIn from '../../../assets/imgs/icon/linkedin-in.svg'
import facebook from '../../../assets/imgs/icon/facebook-f.svg'
import twitter from '../../../assets/imgs/icon/twitter.svg'

import { Link } from 'react-router-dom'



function Card({ data }) {


  let { id, img, titleServe, descriptionServe, classColor } = data

  return (
    <div className="serv card " data-aos="fade-up" data-aos-duration="1000">
      <Link to={`/team/${id}`}>
        <div className={"icon-serv icon-card " + classColor} data-aos="fade-up" data-aos-duration="1100">
          <img alt="img" loading="lazy" src={img} />
        </div>
      </Link>
      <div className="content-card">
        <Link to={`/team/${id}`}>
          <h1 data-aos="fade-up" data-aos-duration="1200" className="">{titleServe}
          </h1>
        </Link>
        <p data-aos="fade-up" data-aos-duration="1300" className="">{descriptionServe}</p>
      </div>
      <div className="social-media" data-aos="fade-up" data-aos-duration="1200">
        <a href="https://www.facebook.com" target="_blank">
          <img src={facebook} alt="icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <img src={instagram} alt="icon" />
        </a>

        <a href="https://www.youtube.com" target="_blank">
          <img src={youtube} alt="icon" />
        </a>

        <a href="https://www.linkedin.com" target="_blank">
          <img src={linkedinIn} alt="icon" />
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <img src={twitter} alt="icon" />
        </a>
      </div>
      <span className="shadow-card"></span>
      <span className="shadow-card2"></span>
    </div>
  )
}

export default Card
import React from 'react'
import instagram from '../../../assets/imgs/icon/instagram.svg'
import youtube from '../../../assets/imgs/icon/youtube.svg'
import tiktok from '../../../assets/imgs/icon/tiktok.svg'
import github from '../../../assets/imgs/icon/github.svg'
import linkedinIn from '../../../assets/imgs/icon/linkedin-in.svg'
import facebook from '../../../assets/imgs/icon/facebook-f.svg'
import twitter from '../../../assets/imgs/icon/twitter.svg'

function Card({ data }) {


  let { img, titleServe, descriptionServe, classColor } = data


  return (
    <div className="serv card " data-aos="fade-up" data-aos-duration="1000">
      <div className={"icon-serv icon-card " + classColor} data-aos="fade-up" data-aos-duration="1100">
        <img alt="img" loading="lazy" src={img} />
      </div>
      <div className="content-team content-card">
        <h1 data-aos="fade-up" data-aos-duration="1200" className="">{titleServe}
        </h1>
        <p data-aos="fade-up" data-aos-duration="1300" className="">{descriptionServe}</p>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com/xrascoz/" target="_blank">
          <img src={facebook} alt="icon" />
        </a>
        <a href="https://www.instagram.com/xrascoz/" target="_blank">
          <img src={instagram} alt="icon" />
        </a>

        <a href="https://www.youtube.com/@xrascoz" target="_blank">
          <img src={youtube} alt="icon" />
        </a>

        <a href="https://www.linkedin.com/in/xrascoz/" target="_blank">
          <img src={linkedinIn} alt="icon" />
        </a>
        <a href="https://www.linkedin.com/in/xrascoz/" target="_blank">
          <img src={twitter} alt="icon" />
        </a>
      </div>
      <span className="shadow-card"></span>
      <span className="shadow-card2"></span>
    </div>
  )
}

export default Card
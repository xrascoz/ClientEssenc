import React from 'react'
import Title from '../title/Title'
import phone from "../../assets/imgs/elment/frame-phone-tiny.png"

function MobileApp() {

    let titleObject = {
        "nameTitle": "Mobile App",
        "descriptionTitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
    }
    return (
        <section className="app-phone">
            <div className="container">
                <Title titleObject={titleObject} />
                <div className="app-container" data-aos="fade-up" data-aos-duration="1000">
                    <div className="app">
                        <div className="app-text">
                            <div className="stares-div">
                                <div className="stare" data-aos="fade-up" data-aos-duration="1100">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/mdgrhyca.json"
                                        trigger="hover"
                                        colors="primary:#fff300,secondary:#fff300"
                                        style={{ width: "80px", height: "80px" }}
                                    ></lord-icon>
                                </div>
                                <div className="stare" data-aos="fade-up" data-aos-duration="1100">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/mdgrhyca.json"
                                        trigger="hover"
                                        colors="primary:#fff300,secondary:#fff300"
                                        style={{ width: "80px", height: "80px" }}
                                    ></lord-icon>
                                </div>
                                <div className="stare" data-aos="fade-up" data-aos-duration="1100">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/mdgrhyca.json"
                                        trigger="hover"
                                        colors="primary:#fff300,secondary:#fff300"
                                        style={{ width: "80px", height: "80px" }}
                                    ></lord-icon>
                                </div>
                                <div className="stare" data-aos="fade-up" data-aos-duration="1100">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/mdgrhyca.json"
                                        trigger="hover"
                                        colors="primary:#fff300,secondary:#fff300"
                                        style={{ width: "80px", height: "80px" }}
                                    ></lord-icon>
                                </div>
                                <div className="stare" data-aos="fade-up" data-aos-duration="1100">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/mdgrhyca.json"
                                        trigger="hover"
                                        colors="primary:#fff300,secondary:#fff300"
                                        style={{ width: "80px", height: "80px" }}
                                    ></lord-icon>
                                </div>
                            </div> 
                            <h2 data-aos="fade-up" data-aos-duration="1600" className="h1-app-text">
                            Launch your own Software As A Service Application with Flex Solutions.
                            </h2>
                            <p data-aos="fade-up" data-aos-duration="1700" className="p-app-text">
                            Medical School Admissions Students Have Tons Of Questions About Their Chosen Field Of Study, So These Blogs Are A Great Place To Learn About The Interview Process, What It’s Like To Be Part Of A White Coat Ceremony, And How They Can Prepare For Residency.
                            </p>

                            <div className="download-a-div" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                {/* <a href="https://play.google.com/store/apps/details?id=com.mangayapp.mangayapp"
                                    target="_blank" rel="noopener noreferrer" className="download-bt" data-aos-duration="1200">
                                    <p>جوجل بلاي</p>
                                    <img src="imgs/icons/google-play.svg" alt="google-play" />
                                </a>
                                <a href="https://apps.apple.com/us/app/mangay/id1671925629" target="_blank"
                                    rel="noopener noreferrer" className="download-bt">
                                    <p>ستور بلاي</p>
                                    <img src="imgs/icons/apple.svg" alt="apple-store" />
                                </a> */}
                                <button className='button' data-aos="fade-up" data-aos-duration="1200"> App Version Soon</button>
                            </div>
                        </div>
                        <img className="app-img" src={phone} alt="app" />
                    </div>
                </div>
            </div>
            {/* </section>
        <section className='phone-app-sec'>
            <div className="container">
                <Title titleObject={titleObject} />
                <button className='button' data-aos="fade-up" data-aos-duration="1200"> App Version Soon</button>
                <img src={phone} className='phone-app-img' data-aos="fade-up" data-aos-duration="1200" />
            </div>
        </section> */}
        </section>

    )
}

export default MobileApp
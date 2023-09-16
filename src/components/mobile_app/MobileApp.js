import React from 'react'
import Title from '../title/Title'
import phone from "../../assets/imgs/elment/frame-phone-tiny.png"
import RightStyle from '../styleElment/RightStyle'

function MobileApp() {

    let titleObject = {
        "nameTitle": "Mobile App",
        "descriptionTitle": "The first application of its kind in the world in mental health."
    }
    return (
        <section className="app-phone">
           <RightStyle/>
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
                                The first application of its kind in the world in the field of mental health
                            </h2>
                            <p data-aos="fade-up" data-aos-duration="1700" className="p-app-text">
                                The first application of its kind in the world in the field of mental health will be published soon. It aims to facilitate service for patients and access to our medical staff from anywhere in the world.
                            </p>

                            <div className="download-a-div" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                <button className='button' data-aos="fade-up" data-aos-duration="1200"> App Version Soon</button>
                            </div>
                        </div>
                        <img className="app-img" src={phone} alt="app" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MobileApp
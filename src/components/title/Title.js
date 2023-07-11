import React from 'react'

function Title({ titleObject }) {

    let { nameTitle , descriptionTitle } = titleObject

    return (
        <div className="title-section" data-aos="fade-up" data-aos-duration="1200">
            <h1 className="name" data-aos="fade-up" data-aos-duration="1300"> {nameTitle} </h1>
            <p data-aos="fade-up" data-aos-duration="1400">{descriptionTitle} </p>
        </div>
    )
}

export default Title
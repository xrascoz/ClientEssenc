import React from 'react'
import Title from '../title/Title'
import Card from './teamCopm/Card'

import photo from "../../assets/imgs/team/photo.jpg"
import LeftStyle from '../styleElment/LeftStyle'



function Team() {
    let titleObject = {
        "nameTitle": "Our team",
        "descriptionTitle": "The first medical team in the Middle East and Canada for integrated psychological treatment."
    }

    let servicesArray = [
       {
            id: 1,
            img: photo,
            titleServe: "Bilal Budair",
            descriptionServe: "Registered Psychotherapist And MHPSS Consultant",
            "classColor": "icon-color1"
        },
        {
            id: 2,
            img: photo,
            titleServe: "Tisha Wilson",
            descriptionServe: "Registered Psychotherapist",
            "classColor": "icon-color2"
        },
        {
            id: 3,
            img: photo,
            titleServe: "Elissar Al-Ayoubi",
            descriptionServe: "Mental Health Worker",
            "classColor": "icon-color3"
        },
        {
            id: 4,
            img: photo,
            titleServe: "Eman Maswadeh",
            descriptionServe: "Psychotherapist Assistant (International)",
            "classColor": "icon-color1"
        },
    ]


    return (
        <section>
            <LeftStyle />
            <div className="container">
                <Title titleObject={titleObject} />
                <div className="team-grid grid-style" >
                    {servicesArray.map((data) => {
                        return (
                            <Card data={data} key={data.id} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Team
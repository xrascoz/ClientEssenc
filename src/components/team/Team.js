import React from 'react'
import Title from '../title/Title'
import Card from './teamCopm/Card'

import photo from "../../assets/imgs/team/photo.jpg"



function Team() {
    let titleObject = {
        "nameTitle": "Our team",
        "descriptionTitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
    }

    let servicesArray = [
        {
            id: 1,
            img: photo,
            titleServe: "Rasco Pro",
            descriptionServe: "Full Stack Developer",
            "classColor": "icon-color1"
        },
        {
            id: 2,
            img: photo,
            titleServe: "Attack Surface Discovery",
            descriptionServe: "Full Stack Developer",
            "classColor": "icon-color2"
        },
        {
            id: 3,
            img: photo,
            titleServe: "Security Assessment",
            descriptionServe: "Full Stack Developer",
            "classColor": "icon-color3"
        },
        {
            id: 4,
            img: photo,
            titleServe: "Dark Web Monitoring",
            descriptionServe: "Full Stack Developer",
            "classColor": "icon-color1"
        },
        {
            id: 5,
            img: photo,
            titleServe: "Dark Web Monitoring",
            descriptionServe: "Full Stack Developer",
            "classColor": "icon-color2"
        },
        {
            id: 6,
            img: photo,
            titleServe: "Dark Web Monitoring",
            descriptionServe: "Full Stack Developer",
        },
    ]


    return (
        <section>
            <div class="container">
                <Title titleObject={titleObject} />
                <div class="team-grid grid-style" >
                    {servicesArray.map((data) => {
                        return (
                            <Card data={data} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Team
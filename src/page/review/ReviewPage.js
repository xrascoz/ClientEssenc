import React from 'react'
import Title from '../../components/title/Title'
import Card from '../../components/review/reviewComp/Card'

function ReviewPage() {


    let reviewObj = [
        {
            "title": "Rasco",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ofIpsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco1",
            "description": " of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco2",
            "description": "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy of and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco3",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco4",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco5",
            "description": "Lorem Ipsum is simply dummy  industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco6",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "nTitle": "Rasco7",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco8",
            "description": "Lorem Ipsum is  industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "nTitle": "Rasco9",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industrys simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco10",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco11",
            "description": "Lorem Ipsum is s simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco12",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco13",
            "description": "s simply dummy text of the printing and typesetting industry s simply dummy text of the printing and typesetting industryand typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco14",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco15",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "nTitle": "Rasco16",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco17",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "nTitle": "Rasco18",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco19",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },{
            "title": "Rasco20",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
    ]


    let titleObject = {
        "nameTitle": "Review",
        "descriptionTitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
    }
    return (
        <div>
            <div className='container-page' >
                <div className='container' >
                    <Title titleObject={titleObject} />
                    <div className='grid-review grid-style ' >
                        {
                            reviewObj.map((data) => {
                                return (
                                    <Card data={data} key={data.title} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewPage
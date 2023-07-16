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
            "title": "Rasco",
            "description": " of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco",
            "description": "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy of and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco",
            "description": "Lorem Ipsum is simply dummy  industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "nTitle": "Rasco",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco",
            "description": "Lorem Ipsum is  industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "nTitle": "Rasco",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industrys simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco",
            "description": "Lorem Ipsum is s simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco",
            "description": "s simply dummy text of the printing and typesetting industry s simply dummy text of the printing and typesetting industryand typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "nTitle": "Rasco",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "nTitle": "Rasco",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },
        {
            "title": "Rasco",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
        },{
            "title": "Rasco",
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
                                    <Card data={data} />
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
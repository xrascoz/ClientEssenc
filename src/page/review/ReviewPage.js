import React from 'react'
import Title from '../../components/title/Title'
import Card from '../../components/review/reviewComp/Card'

function ReviewPage() {


    let reviewObj = [
       {
            "id": 1,
            "title": "Ahmed Mohamed",
            "description": "The first clinic in mental health. Thank you for this creativity"
        },
        {
            "id": 2,
            "title": "Doaa Ahmed",
            "description": "Thank you for your efforts. The staff is the best in health"
        },
        {
            "id": 3,
            "title": "Khaled Ahmed",
            "description": "All thanks to the distinguished medical staff"
        },
        
        {
            "id": 4,
            "title": "Mohamed Ahmed",
            "description": "Tremendous efforts to improve the psychological state"
        },
        {
            "title": "Ali Ahmed",
            "description": "Tremendous efforts to improve the psychological state"
        },
        {
            "title": "Khalil Ali",
            "description": "Tremendous efforts to improve the psychological state"
        }
    ]


    let titleObject = {
        "nameTitle": "Review",
        "descriptionTitle": "We show you the best reviews we have received from visitors to our partners"
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
import React from 'react'
import Title from '../title/Title'
import phone from "../../assets/imgs/elment/phone.png"
function MobileApp() {

    let titleObject = {
        "nameTitle": "Mobile App",
        "descriptionTitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
    }
    return (
        <section className='phone-app-sec'>
            <div className="container">
                <Title titleObject={titleObject} />
                <button className='button'> App Version Soon</button>
                <img src={phone} className='phone-app-img' />
            </div>
        </section>
    )
}

export default MobileApp
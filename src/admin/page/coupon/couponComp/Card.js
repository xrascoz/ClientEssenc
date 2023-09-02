import React from 'react'

import plusIcon from "../../../../assets/imgs/icon/plusicon.svg"


function Card({ company, toggleCardPopCoupon }) {

    let { availableAppointment, nameCompany , _id } = company

    return (

        <>
           
            {availableAppointment.length > 0 ? (
                <div className='card-appointment company-div'>
                    <h1 className='name-company-h1'>{nameCompany}</h1>
                    <div className='add-new-date' idUser={_id}  onClick={(e) => toggleCardPopCoupon(e)} >
                        <img src={plusIcon} alt='img' />
                    </div>
                    {
                        availableAppointment.map((item, index) => {
                            if (item.availableNumber > 0) {
                                return (
                                    <div className='time-date' key={item._id}  >

                                        <div className='name-ot-meeting-div-remove' >
                                            <div className='category-length' >
                                                <p>{item.category}</p>
                                                <span>
                                                    {item.availableNumber}
                                                </span>
                                            </div>
                                            <div className='code-div' >
                                                {item.couponCode}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        })
                    }
                </div>
            ) : (
                false
            )
            }


        </>

    )
}

export default Card
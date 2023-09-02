import React from 'react'



function Card({ appointments }) {
    let { dateHour ,dateHourEnd, dateDay, category } = appointments
    return (
        <div className='card-appointment'>
            <div className='name-ot-meeting-div-remove' >
                <p>{category}</p>
            </div>
            <div className='time-date'  >
                <h2 >{dateHour}</h2>
                <h2 >to</h2>
                <h2 >{dateHourEnd}</h2>
                <p>{dateDay}</p>
            </div>
        </div>
    )
}

export default Card
import React from 'react'
import Card from './add-new-dateComp/Card';
import { useState, useEffect } from 'react';

import plusIcon from "../../../assets/imgs/icon/plusicon.svg"
import xmark from "../../../assets/imgs/icon/xmark.svg"
import axios from 'axios';

import ErrorAlert from '../../../components/alertCopm/ErrorAlert';
import SuccessAlert from '../../../components/alertCopm/SuccessAlert'

// import { BASE_URL } from "../../../server/server"

function AddNewDate() {

    let BASE_URL = process.env.REACT_APP_API_LINK
    let [successAlertMessage, setSuccessAlertMessage] = useState("")
    let [toggleAlertSucsses, setToggleAlertSucsses] = useState(false)

    let [errorAlertMessage, setErrorAlertMessage] = useState("")
    let [toggleAlertError, setToggleAlertError] = useState(false)

    let [toggle, setToggle] = useState(false)

    let toggleCardPop = () => {
        setToggle(!toggle)
    }


    let [updateUi, setUpdateUi] = useState(false)



    let [dateHour, setDateHour] = useState("00:00")
    let [dateHourEnd, setDateHourEnd] = useState("00:00")
    let [dateDay, setDateDay] = useState("")
    let [category, setCategory] = useState("Consultation")


    const time24to12 = (time24) => {
        const [hour, minute] = time24.split(':');
        let hourInt = parseInt(hour);
        const amPm = hourInt >= 12 ? 'PM' : 'AM';
        hourInt = hourInt % 12 || 12;
        return `${hourInt}:${minute} ${amPm}`;
    };

    const handleStartTimeChange = (e) => {
        const time24 = e.target.value;
        const time12 = time24to12(time24);
        setDateHour(time12);
    };

    const handleEndTimeChange = (e) => {
        const time24 = e.target.value;
        const time12 = time24to12(time24);
        setDateHourEnd(time12);
    };

    const [order, setOrder] = useState([]);



    useEffect(() => {
        axios.get(`${BASE_URL}/api/appointment`).then(response => {
            setOrder(response.data.filter(item => item.booked == false && item.available == true));
        });
    }, [updateUi]);





    let addDate = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/api/appointment`, { dateHour, dateHourEnd, dateDay, category }).then((response) => {
            if (response.data.error) {
                setErrorAlertMessage(response.data.error)
                setToggleAlertError(true)
                setTimeout(() => {
                    setToggleAlertError(false)
                }, 5000)

            } else {
                setSuccessAlertMessage(response.data.success)
                setToggleAlertSucsses(true)
                setTimeout(() => {
                    setToggleAlertSucsses(false)
                }, 5000)
                setUpdateUi(prev => (!prev))
            }
        })
    }



    let [userAppointments, setUserAppointments] = useState([])




    useEffect(() => {
        axios.get(`${BASE_URL}/api/user`)
            .then(response => {
                const usersData = response.data;
                const filteredUsers = usersData.filter(userAvi => userAvi.appointments && userAvi.appointments.length > 0);
                setUserAppointments(filteredUsers);
            })
            .catch(error => {
                console.error('حدث خطأ في استرجاع البيانات:', error);
            });
    }, [updateUi]);



    return (
        <div className='content-dashboard' >
            <ErrorAlert AlertMessage={errorAlertMessage} toggleAlert={toggleAlertError} />
            <SuccessAlert AlertMessage={successAlertMessage} toggleAlert={toggleAlertSucsses} />


            <div className={toggle ? "add-website div-pop active" : "add-website div-pop"} >
                <div className="card-div ">
                    <div className="x-subscribe x-button" onClick={toggleCardPop}>
                        <img src={xmark} alt="xmark.svg" className="icon" />
                    </div>
                    <div className="subscribe-div-text">
                        <h1 className="h1-text "> New date  </h1>
                        <p>add new Date for your website</p>
                    </div>
                    <form action="" className="form-subscribe" id="form-subscribe" onSubmit={(e) => addDate(e)}>
                        <p className='label-p' >date day</p>
                        <input type="date" required onChange={(e) => setDateDay(e.target.value)} value={dateDay} />
                        <p className='label-p'>start hour date </p>
                        <div className='input-time' >
                            <p className='value-time'> {dateHour}</p>  <input type="time" id="appt" name="appt" onChange={handleStartTimeChange} ></input>
                        </div>
                        <p className='label-p'>end hour date</p>
                        <div className='input-time' >
                            <p className='value-time'> {dateHourEnd}</p>   <input type="time" id="appt" name="appt" onChange={handleEndTimeChange} ></input>
                        </div>

                        <p className='label-p'>category date</p>
                        <select name="appointment" id="appointment" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="Consultation">Consultation</option>
                            <option value="Initial Assessment">Initial Assessment</option>
                            <option value="Psychotherapy Session">Psychotherapy Session</option>
                            <option value="Family Therapy">Family Therapy</option>
                            <option value="Supervision">Supervision</option>
                        </select>
                        <button className="button-form " >add new Date</button>
                    </form>

                </div>
            </div>

            <div className='card-date-grid' >
                <div className='add-new-date' onClick={toggleCardPop} >
                    <img src={plusIcon} alt='img' />
                </div>
                {order.map(item => {
                    return (
                        <Card item={item} setUpdateUi={setUpdateUi} key={item._id}

                            setToggleAlertError={setToggleAlertError}
                            setErrorAlertMessage={setErrorAlertMessage}
                            setToggleAlertSucsses={setToggleAlertSucsses}
                            setSuccessAlertMessage={setSuccessAlertMessage}


                        />
                    );
                })}

            </div>
        </div>
    )
}

export default AddNewDate
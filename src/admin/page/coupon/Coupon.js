import React from 'react'
import Card from './couponComp/Card';
// import { BASE_URL } from "../../../server/server"

import ErrorAlert from '../../../components/alertCopm/ErrorAlert';
import SuccessAlert from '../../../components/alertCopm/SuccessAlert'

import { useState, useEffect } from 'react';
import axios from 'axios'
import xmark from "../../../assets/imgs/icon/xmark.svg"
import plusIcon from "../../../assets/imgs/icon/plusicon.svg"

function Coupon() {
    let BASE_URL = process.env.REACT_APP_API_LINK
    let [nameCompany, setNameCompany] = useState("")
    let [availableNumber, setAvailableNumber] = useState(null)
    let [expirationDate, setExpirationDate] = useState(null)
    console.log(expirationDate)

    let [category, setCategory] = useState("Initial Assessment")

    let [toggleCouponCompany, setToggleCouponCompany] = useState(false)
    let [toggleCoupon, setToggleCoupon] = useState(false)

    let [idUser, setIdUser] = useState("")



    let toggleCardPopCoupon = (e) => {
        setIdUser(e.currentTarget.getAttribute("idUser"))
        setToggleCoupon(!toggleCoupon)
    }


    let [successAlertMessage, setSuccessAlertMessage] = useState("")
    let [toggleAlertSucsses, setToggleAlertSucsses] = useState(false)

    let [errorAlertMessage, setErrorAlertMessage] = useState("")
    let [toggleAlertError, setToggleAlertError] = useState(false)


    let addCompany = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/api/company`, { nameCompany , availableNumber , category , expirationDate}).then((response) => {
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
                setNameCompany("")
                setAvailableNumber("")
                setCategory("")
                setUpdateUi(prev => (!prev))
                setToggleCouponCompany(!toggleCouponCompany)

            }
        })
    }

    let addCoupon = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/api/company-new/${idUser}`, {  availableNumber , category , expirationDate }).then((response) => {
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
                setNameCompany("")
                setAvailableNumber("")
                setCategory("")
                setUpdateUi(prev => (!prev))
                setToggleCoupon(!toggleCoupon)

            }
        })
    }

    let [updateUi, setUpdateUi] = useState(false)
    let [userAppointmentsCoupon, setUserAppointmentsCoupon] = useState([])
    useEffect(() => {
        axios.get(`${BASE_URL}/api/company`)
            .then(response => {
                const usersData = response.data;
                const filteredUsers = usersData.filter(userAvi => userAvi.availableAppointment.length > 0);
                setUserAppointmentsCoupon(filteredUsers);
            })

            .catch(error => {
                console.error("error", error);
            });
    }, [updateUi]);





    return (
            <div className='content-dashboard grid-company' >

            <ErrorAlert AlertMessage={errorAlertMessage} toggleAlert={toggleAlertError} />
            <SuccessAlert AlertMessage={successAlertMessage} toggleAlert={toggleAlertSucsses} />

          
            <div className={toggleCouponCompany ? "add-website div-pop active" : "add-website div-pop"} >
                <div className="card-div ">
                    <div className="x-subscribe x-button" onClick={() =>setToggleCouponCompany(!toggleCouponCompany)}>
                        <img src={xmark} alt="xmark.svg" className="icon" />
                    </div>
                    <div className="subscribe-div-text">
                        <h1 className="h1-text "> New Company Coupon  </h1>
                        <p>add new New Company Coupon</p>
                    </div>
                    <form action="" className="form-subscribe" id="form-subscribe" onSubmit={(e) => addCompany(e)}>
                        <p className='label-p' >company Name</p>
                        <input type="text" placeholder="type company Name" required value={nameCompany} onChange={(e) => setNameCompany(e.target.value)} />
                        <p className='label-p' >available Number</p>
                        <input type="number" placeholder="available Number" required value={availableNumber} onChange={(e) => setAvailableNumber(e.target.value)} />
                        <p className='label-p' >expiration Date</p>
                        <input type="date" placeholder="expiration Date" required value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />
                        <p className='label-p'>category</p>
                        <select name="appointment" id="appointment" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="Initial Assessment">Initial Assessment</option>
                            <option value="Psychotherapy Session">Psychotherapy Session</option>
                            <option value="Family Therapy">Family Therapy</option>
                            <option value="Supervision">Supervision</option>
                        </select>
                        <button className="button-form" >New Company Coupon</button>
                    </form>
                </div>
            </div>
            <div className={toggleCoupon ? "add-website div-pop active" : "add-website div-pop"} >
                <div className="card-div ">
                    <div className="x-subscribe x-button" onClick={() =>setToggleCoupon(!toggleCoupon)}>
                        <img src={xmark} alt="xmark.svg" className="icon" />
                    </div>
                    <div className="subscribe-div-text">
                        <h1 className="h1-text "> New Company Coupon  </h1>
                        <p>add new New Company Coupon</p>
                    </div>
                    <form action="" className="form-subscribe" id="form-subscribe" onSubmit={(e) => addCoupon(e)}>
                        <p className='label-p' >available Number</p>
                        <input type="number" placeholder="available Number" required value={availableNumber} onChange={(e) => setAvailableNumber(e.target.value)} />
                        <p className='label-p' >expiration Date</p>
                        <input type="date" placeholder="expiration Date" required value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />

                        <p className='label-p'>category date</p>
                        <select name="appointment" id="appointment" value={category} onChange={(e) => setCategory(e.target.value)}>
                     
                            <option value="Initial Assessment">Initial Assessment</option>
                            <option value="Psychotherapy Session">Psychotherapy Session</option>
                            <option value="Family Therapy">Family Therapy</option>
                            <option value="Family Therapy">Supervision</option>
                        </select>
                        <button className="button-form" >New Coupon</button>
                    </form>
                </div>
            </div>
                
                <div className='grid-card-dashboard' >
                    
                    <div className='add-new-date add-new' onClick={() =>setToggleCouponCompany(!toggleCouponCompany)} >
                        <img src={plusIcon} alt='img' />
                    </div>
                    
                    {userAppointmentsCoupon.map(user => (
                        <Card company={user}
                            setUpdateUi={setUpdateUi}
                            key={user._id}

                            setToggleCoupon={setToggleCoupon}
                            toggleCardPopCoupon={toggleCardPopCoupon}

                            setSuccessAlertMessage={setSuccessAlertMessage}
                            setToggleAlertSucssesParent={setToggleAlertSucsses}
                            setToggleAlertErrorParent={setToggleAlertError}
                        />
                    ))}


                </div>
            </div>
    )
}

export default Coupon
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


import { useNavigate } from 'react-router-dom';

import NotFound from '../../../page/not-found/NotFound';

import Title from "../../../components/title/Title"
import ErrorAlert from '../../../components/alertCopm/ErrorAlert';
import SuccessAlert from '../../../components/alertCopm/SuccessAlert'

import paypalIcon from "../../../assets/imgs/icon/paypal.svg"
import couponIcon from "../../../assets/imgs/icon/couponIcon.svg"




function Order() {
   let BASE_URL = process.env.REACT_APP_API_LINK


    const navigate = useNavigate();
    const [appleToNavigate, setAppleToNavigate] = useState(false)

    let [errorAlertMessage, setErrorAlertMessage] = useState("")
    let [successAlertMessage, setSuccessAlertMessage] = useState("")

    let [toggleAlertError, setToggleAlertError] = useState(false)
    let [toggleAlertSucsses, setToggleAlertSucsses] = useState(false)

    let nameCatogry = useParams().id.toLowerCase();

    let [price, setPrice] = useState("")

    const [order, setOrder] = useState([]);
    let [userId, setUserId] = useState("")

    let [couponCode, setCouponCode] = useState("")

    let [toggleCoupon, setToggleCoupon] = useState(false)


    let toggleCouponFunc = (e) => {
        e.currentTarget.parentNode.querySelector(".form-coupon").classList.toggle("active")
    }

    useEffect(() => {

        setUserId(localStorage.getItem("userId"))
        if (nameCatogry == "Initial Assessment".toLowerCase()) {
            setPrice("800")
        } else if (nameCatogry == "Consultation".toLowerCase()) {
            setPrice("0")
        } else if (nameCatogry == "Psychotherapy Session".toLowerCase()) {
            setPrice("150")
        } else if (nameCatogry == "Family Therapy".toLowerCase()) {
            setPrice("270")
        }
        else if (nameCatogry == "Supervision".toLowerCase()) {
            setPrice("100")
        }
        axios.get(`${BASE_URL}/api/appointment`).then(response => {
            setOrder(response.data.filter(item => item.booked === false && item.category.toLowerCase() === nameCatogry));
        });

        if (appleToNavigate) {
            navigate(`/user/appointment/${userId}`)
        }

    }, [nameCatogry]);

    useEffect(() => {

        if (appleToNavigate) {
            navigate(`/user/appointment/${userId}`)
        }

    }, [appleToNavigate]);

    let getOrderFree = (e) => {

        let dateHour = e.target.getAttribute("dateHour")
        let dateHourEnd = e.target.getAttribute("dateHourEnd")
        let dateDay = e.target.getAttribute("dateDay")
        let category = e.target.getAttribute("category")
        let booked = e.target.getAttribute("booked")
        let available = e.target.getAttribute("available")
        let id = e.target.getAttribute("id")

        axios.post(`${BASE_URL}/api/free-appointment-user/${userId}`, {
            "dateHour": dateHour,
            "dateHourEnd": dateHourEnd,
            "dateDay": dateDay,
            "category": category,

            "booked": true,
            "available": true
        }).then((response) => {
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
                setAppleToNavigate(true)
                axios.put(`${BASE_URL}/api/appointment/${id}`, {
                    "booked": true,
                }).then((response) => {

                })
            }
        })
    }

    let getOrderCoupon = (e) => {
        e.preventDefault()
        const button = e.target.querySelector('.button');
        let dateHour = button.getAttribute("dateHour")
        let dateHourEnd = button.getAttribute("dateHourEnd")
        let dateDay = button.getAttribute("dateDay")
        let category = button.getAttribute("category")
        let booked = button.getAttribute("booked")
        let available = button.getAttribute("available")
        let id = button.getAttribute("id")

        axios.post(`${BASE_URL}/api/coupon-user/${userId}`, {
            "dateHour": dateHour,
            "dateHourEnd": dateHourEnd,
            "dateDay": dateDay,
            "category": nameCatogry,
            "couponCode": couponCode,
            "booked": true,
            "available": true
        }).then((response) => {
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
                axios.put(`${BASE_URL}/api/appointment/${id}`, {
                    "booked": true,
                }).then((response) => {
                })
                axios.post(`${BASE_URL}/api/update-coupon`, {
                    "couponCode": couponCode,
                }).then((response) => {

                })
                setAppleToNavigate(true)
            }
        })
    }



    let paymentButton = async (e) => {
        try {
            e.preventDefault()
            let id = e.target.getAttribute("id")

            const response = await axios.post(`${BASE_URL}/api/user/pay/${userId}`, {
                "id": id,
                "price": price,
            });
            const { approvalUrl } = response.data;
            window.location.href = approvalUrl;
        } catch (error) {
            console.error('Error during payment:', error);
        }
    }

    let titleObject = {
        "nameTitle": nameCatogry,
        "descriptionTitle": "Book now your treatment session in the fastest and simplest way."
    }
    let buttonNotFoundTittle = "choose another Appointment"
    let pNotFound = "the all of Appointment are booked Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of    "
    let LinkTo = "/book-now"




    return (
        <div>
            <ErrorAlert AlertMessage={errorAlertMessage} toggleAlert={toggleAlertError} />
            <SuccessAlert AlertMessage={successAlertMessage} toggleAlert={toggleAlertSucsses} />
            {order.length > 0 ? (
                <div className='container'>
                    <div className='container-page'>

                        <Title titleObject={titleObject} />

                        <div className='card-date-grid card-date-grid-div'>


                            {order.map(item => (
                                <div className="card-date card-coupon" key={item._id} data-aos="fade-up" data-aos-duration="1200">
                                    <div className="time-date">
                                        <div>
                                            <h2>{item.dateHour}</h2>
                                            <h2>to</h2>
                                            <h2>{item.dateHourEnd}</h2>
                                        </div>
                                        <p>{item.dateDay}</p>
                                    </div>
                                    {
                                        nameCatogry === "Consultation".toLowerCase() ? (
                                            <button className='button' onClick={(e) => getOrderFree(e)} dateHour={item.dateHour} dateHourEnd={item.dateHourEnd} dateDay={item.dateDay} available={item.available} booked={item.booked} category={item.category} id={item._id}>add it</button>
                                        ) : (
                                                <button className='button' onClick={(e) => paymentButton(e)} dateHour={item.dateHour} dateHourEnd={item.dateHourEnd} dateDay={item.dateDay} available={item.available} booked={item.booked} category={item.category} id={item._id} >Pay Now
                                                
                                                
                                                
                                                <img src={paypalIcon} alt='paypal-icon' className='icon-pay' />
                                                
                                                
                                                </button>
                                        )
                                    }
                                    {
                                        nameCatogry !== "Consultation".toLowerCase() ? (
                                            <div className='div-coupon-form' >
                                                <button className='button' onClick={(e) => toggleCouponFunc(e)} > i have coupon
                                                <img src={couponIcon} alt='paypal-icon' className='icon-pay' />
                                                
                                                </button>
                                                <form className={toggleCoupon ? "form-coupon active" : "form-coupon"} onSubmit={(e) => getOrderCoupon(e)} >
                                                    <input type="text" placeholder="enter the coupon" required onChange={(e) => setCouponCode(e.target.value)} />
                                                    <button className='button' dateHour={item.dateHour} dateHourEnd={item.dateHourEnd} dateDay={item.dateDay} available={item.available} booked={item.booked} category={item.category} id={item._id}> add it
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    </button>
                                                </form>
                                            </div>
                                        ) : false

                                    }





                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            ) : (
                <div>
                    <NotFound buttonNotFoundTittle={buttonNotFoundTittle} LinkTo={LinkTo} pNotFound={pNotFound} />
                </div>
            )
            }
        </div >
    );

}

export default Order;

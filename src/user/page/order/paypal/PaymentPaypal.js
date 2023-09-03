
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// import { BASE_URL } from "../../../../server/server"

function PaymentPaypal({ dateHour, dateHourEnd, dateDay, price, category, booked, available, id }) {


    let BASE_URL = process.env.REACT_APP_API_LINK
    const navigate = useNavigate();
    const paypal = useRef()
    useEffect(() => {
        let userId = localStorage.getItem("userId")
        window.paypal.Buttons({
            createOrder: (data, action, err) => {
                return action.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Cool looking",
                            amount: {
                                currency_code: "CAD",
                                value: price
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                axios.post(`${BASE_URL}/api/appointment-user/${userId}`, {
                    "dateHour": dateHour,
                    "dateHourEnd": dateHourEnd,
                    "dateDay": dateDay,
                    "category": category,
                    "booked": true,
                    "available": available,
                    "price": price
                }).then((response) => {


                })
                axios.put(`${BASE_URL}/api/appointment/${id}`, {
                    "booked": true,
                }).then((response) => {

                })
                navigate(`/user/appointment/${userId}`)

            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current)
    }, [])
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}
export default PaymentPaypal
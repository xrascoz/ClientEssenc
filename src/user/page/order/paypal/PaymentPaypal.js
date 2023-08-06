
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function PaymentPaypal({ dateHour, dateHourEnd, dateDay, price, category, booked, available, id }) {
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
                console.log(order);
                axios.post(`http://localhost:5000/api/appointment-user/${userId}`, {
                    "dateHour": dateHour,
                    "dateHourEnd": dateHourEnd,
                    "dateDay": dateDay,
                    "category": category,
                    "booked": true,
                    "available": available
                }).then((response) => {
                    console.log(response);
                   
                })
                axios.put(`http://localhost:5000/api/appointment/${id}`, {
                    "booked": true,
                }).then((response) => {
                    console.log(response);
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
            <div ref={paypal}  ></div>
        </div>
    )
}

export default PaymentPaypal
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PaymentPaypal from './paypal/PaymentPaypal';
import { useParams } from 'react-router-dom';

function Order() {
    let nameCatogry = useParams().id.toLowerCase();
  

    let [price , setPrice] = useState("")
    

    const [order, setOrder] = useState([]);

    let getData = (e) => {
        console.log(e.currentTarget);
    }

    useEffect(() => {
        if (nameCatogry == "Initial Assessment".toLowerCase() ) {
            setPrice("800")
        } else if (nameCatogry == "Consultation".toLowerCase()) {
            setPrice("0")
        }else if (nameCatogry == "Psychotherapy Session".toLowerCase()) {
            setPrice("150")
        }else if (nameCatogry == "Family Therapy".toLowerCase()) {
            setPrice("270")
        }
        axios.get("http://localhost:5000/api/appointment").then(response => {
            setOrder(response.data.filter(item => item.booked === false && item.category.toLowerCase() === nameCatogry));
        });
    }, [nameCatogry]);

    return (
        <div className='container'>
            <div className='card-date-grid card-date-grid-div' >
                {order.map(item => {
                    return (
                        <div className="card-date" key={item.dateHour} key={item._id} >
                            <div className="time-date">
                                <div>
                                    <h2>{item.dateHour}</h2>
                                   <h2>to</h2> 
                                <h2>{item.dateHourEnd}</h2>
                                </div>
                                <p>{item.dateDay}</p>
                            </div>
                            <PaymentPaypal dateHour={item.dateHour} dateHourEnd={item.dateHourEnd} dateDay={item.dateDay}  available={item.available} booked={item.booked} category={item.category} id={item._id} price={price} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Order;

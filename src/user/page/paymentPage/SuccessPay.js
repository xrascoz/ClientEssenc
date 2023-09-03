import React, { useEffect, useState } from 'react';
import mainImg from "../../../assets/imgs/icon/success.svg";
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
// import { BASE_URL } from '../../../server/server';

function SuccessPay() {
  let BASE_URL = process.env.REACT_APP_API_LINK
  const location = useLocation();
  const navigate = useNavigate();
  const pathLocation = useLocation().pathname;
  const [userId, setUserId] = useState("");
  const [previousRequestMade, setPreviousRequestMade] = useState(false); 

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));

    const parts = pathLocation.split('/').slice(2);
    const idUser = parts[0];
    const id = parts[1];
    const dateHour = decodeURIComponent(parts[2]);
    const dateHourEnd = decodeURIComponent(parts[3]);
    const dateDay = parts[4];
    const category = decodeURIComponent(parts[5]);

    const sendRequest = () => {
      axios
        .post(`${BASE_URL}/api/appointment-user/${idUser}`, {
          "idAppointment": id,
          "dateHour": dateHour,
          "dateHourEnd": dateHourEnd,
          "dateDay": dateDay,
          "category": category,
          "booked": true,
          "available": true
        })
        .then((response) => {
          if (!response.data.error) {
            axios.put(`${BASE_URL}/api/appointment/${id}`, {
              "booked": true
            });
          
            localStorage.setItem("orderPay", id);
          }
          setPreviousRequestMade(true);
        });
    }; 
    sendRequest();

    if (localStorage.getItem("orderPay") !== id && !previousRequestMade) {
      setPreviousRequestMade(true);
    }

    if (location.pathname.includes('/success-pay')) {
      navigate(`/user/appointment/${idUser}`);
    }

    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div>
      <div className="not-found-parent not-found-parent-appointment">
        <img src={mainImg} alt="Success" />
      </div>
      <div className='div-NotFound-button'>
        <p>
          Card processing and preferred ways to pay
          tooltip-for-advanceallows you to offer the same PayPal Payments options as well as:
        </p>
        <Link className='button' to={`/user/appointment/${userId}`}> dashboard </Link>
      </div>
    </div>
  );
}

export default SuccessPay;
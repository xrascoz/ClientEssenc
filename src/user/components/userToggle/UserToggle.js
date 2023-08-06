import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import profileImg from "../../../assets/imgs/team/photo.jpg"
import chevronDown from "../../../assets/imgs/icon/chevron-down.svg"
import logOutIcon from "../../../assets/imgs/icon/arrow-right-from-line.svg"
import settingIcon from "../../../assets/imgs/icon/gear.svg"
import dashboard from "../../../assets/imgs/icon/widget.svg"




function UserToggle() {
    const navigate = useNavigate();
    let [toggle, setToggle] = useState(false)
    const [cookies, setCookie ] = useCookies(['access_token']);
    const [cookiesUser, setCookieUser ] = useCookies(['access_token_User']);

    let [user, setUser] = useState({})

    let { fullName, img  , _id} = user
    useEffect(() => {
        let userId = localStorage.getItem("userId")
        axios.get(`http://localhost:5000/api/user/${userId}`).then(response => {
            setUser(response.data);
        })
    }, [])


    let logOutFunction = (e) => {
        e.preventDefault()
        localStorage.removeItem("userId")
        setCookieUser('access_token_User', '');
        setCookie('access_token', '');
        navigate("/")
    }



  return (
    <div className="account-parent " onClick={() => setToggle(!toggle)}>
    <div className="account-name-photo">
        <div className="img-account">
            <img src={img ? `http://localhost:5000/${img}` : profileImg} alt="profileImg"  />
        </div>
        <div className="name-username">
            <b className="name-user">{fullName}</b>

        </div>
    </div>
    <img src={chevronDown} alt="chevron-down" className="svg-icon-header chevron-down active" />
    <ul className={toggle ? "down-li-account-parent active" : "down-li-account-parent"}>
        <li>
            <Link to={`/user/appointment/${_id}`}>
                <p>dashboard</p>
                <img src={dashboard} alt="bell" className="svg-icon-header" />
            </Link>
        </li>
        <li>
            <Link to={`/setting/${_id}`}>
                <p>setting</p>
                <img src={settingIcon} alt="bell" className="svg-icon-header" />
            </Link>
        </li>
        <li>
            <Link onClick={(e) => logOutFunction(e)} >
                <p>log out</p>
                <img src={logOutIcon} alt="bell" className="svg-icon-header" />
            </Link>
        </li>
    </ul>
</div>
  )
}

export default UserToggle
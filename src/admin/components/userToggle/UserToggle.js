import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import profileImg from "../../../assets/imgs/proFile/imgDefult.svg"
import chevronDown from "../../../assets/imgs/icon/chevron-down.svg"
import logOutIcon from "../../../assets/imgs/icon/arrow-right-from-line.svg"
import settingIcon from "../../../assets/imgs/icon/gear.svg"
import dashboard from "../../../assets/imgs/icon/widget.svg"




function UserToggle() {
    let BASE_URL = process.env.REACT_APP_API_LINK
    const navigate = useNavigate();
    let [toggle, setToggle] = useState(false)
    const [cookies, setCookie] = useCookies(['access_token']);
    const [cookiesUser, setCookieUser ] = useCookies(['access_token_User']);


    let [admin, setAdmin] = useState({})

    let { fullName, img, _id } = admin
    useEffect(() => {
        let adminId = localStorage.getItem("adminId")
        axios.get(`${BASE_URL}/api/admin/${adminId}`).then(response => {
            setAdmin(response.data);
        })
    }, [])


    let logOutFunction = (e) => {
        e.preventDefault()
        localStorage.removeItem("adminId")
        localStorage.removeItem("userId")
        localStorage.removeItem("emailUser")
        setCookie('access_token', '');
        setCookieUser('access_token_User', '');
        navigate("/")
    }



    return (
        <div className="account-parent " onClick={() => setToggle(!toggle)}>
            <div className="account-name-photo">
                <div className="img-account">
                    <img src={img ? img : profileImg} alt="profileImg" />
                </div>
                <div className="name-username">
                    <b className="name-user">{fullName}</b>

                </div>
            </div>
            <img src={chevronDown} alt="chevron-down" className="svg-icon-header chevron-down active" />
            <ul className={toggle ? "down-li-account-parent active" : "down-li-account-parent"}>
                <li>
                    <Link to={`/admin/appointment/${_id}`}>
                        <p>dashboard</p>
                        <img src={dashboard} alt="bell" className="svg-icon-header" />
                    </Link>
                </li>
                <li>
                    <Link to={`/admin/setting/${_id}`}>
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
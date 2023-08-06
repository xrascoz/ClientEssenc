import React from 'react'
import profileImg from "../../../assets/imgs/team/photo.jpg"
import chevronDown from "../../../assets/imgs/icon/chevron-down.svg"
import logOutIcon from "../../../assets/imgs/icon/arrow-right-from-line.svg"
import settingIcon from "../../../assets/imgs/icon/gear.svg"
import toggleImg from "../../../assets/imgs/icon/toggle.svg"
import dashboard from "../../../assets/imgs/icon/widget.svg"

import UserToggle from '../userToggle/UserToggle'


import { Link } from 'react-router-dom'

import { useState } from 'react'


function Header() {
    let [toggle, setToggle] = useState(false)
    return (
        <div className='header-dashboard'>
        <div className='toggle-div-parent'>
            <UserToggle />
            <img src={toggleImg} alt="bars-sort.svg" className="icon toggle" />
        </div>
    </div>
    )
}

export default Header
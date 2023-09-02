import React from 'react'
import toggleImg from "../../../assets/imgs/icon/toggle-dark.svg"
import UserToggle from '../userToggle/UserToggle'
function Header() {

    let toggleNavPar = () => {
        let navParSide = document.querySelector(".nav-par-side")
        navParSide.classList.toggle("active")
    }


    return (
        <div className='header-dashboard'>
            <div className='toggle-div-parent'>
                <UserToggle />
                <div className='toggle-dashboard' onClick={toggleNavPar} >
                    <img src={toggleImg} alt="bars-sort.svg" className="icon toggle" />
                </div>
            </div>
        </div>
    )
}

export default Header



import React from 'react'
import AppointmentUser from '../appointment/AppointmentUser'
import AppointmentUserEnd from '../appointment/AppointmentUserEnd'
import Setting from '../setting/Setting';

import Header from '../../components/header/Header';
import Navpar from '../../components/navpar/Navpar';
import HeadOfSec from '../../components/head-of-sec/HeadOfSec';

import Login from '../../../page/register/Login';

import { Route, Routes } from 'react-router-dom';
import { useCookies } from 'react-cookie';


export default function UserRoutes() {

    const [cookiesUser, setCookieUser] = useCookies(['access_token_User']);


    return (
        <div className='grid-dashboard'>
            <Navpar />
            <div className='content-dashboard' >
                <Header />
                <HeadOfSec />
                <Routes>
                    <Route path="/appointment/:id" element={cookiesUser.access_token_User ? <AppointmentUser /> : <Login />} />
                    <Route path="/appointment-end/:id" element={cookiesUser.access_token_User ? <AppointmentUserEnd /> : <Login />} />
                    <Route path="/setting/:id" element={cookiesUser.access_token_User ? <Setting /> : <Login />} />

                </Routes>
            </div>
        </div>
    )
}

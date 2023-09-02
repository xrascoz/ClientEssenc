import React from 'react';
import LoginAdmin from '../../../admin/page/register/Login';
import SettingAdmin from '../../../admin/page/setting/Setting';
import AdminMessage from '../../../admin/page/contact/AdminMessage';
import Coupon from '../../../admin/page/coupon/Coupon';
import Appointment from '../../../admin/page/appointment/Appointment';
import AppointmentEnd from '../../../admin/page/appointment/AppointmentEnd';
import AddNewDate from '../../../admin/page/add-new-date/AddNewDate';
import BlogAddNew from '../../../admin/page/Blog/BlogAddNew';
import ProjectAddNew from '../../../admin/page/project/ProjectAddNew';


import Navpar from '../../components/navpar/Navpar';
import HeadOfSec from '../../components/head-of-sec/HeadOfSec';
import Header from '../../components/header/Header';


import { Route, Routes } from 'react-router-dom';
import { useCookies } from 'react-cookie';


function AdminRoutes() {
    const [cookies, setCookie] = useCookies(['access_token']);

    return (
        <div className='grid-dashboard'>
            <Navpar />
            <div className='content-dashboard' >
                <Header />
                <HeadOfSec />
                <Routes>
                    <Route path="/appointment/:id" element={cookies.access_token ? <Appointment /> : <LoginAdmin />} />
                    <Route path="/appointment-end/:id" element={cookies.access_token ? <AppointmentEnd /> : <LoginAdmin />} />
                    <Route path="/add-new-date/:id" element={cookies.access_token ? <AddNewDate /> : <LoginAdmin />} />
                    <Route path="/add-new-blog/:id" element={cookies.access_token ? <BlogAddNew /> : <LoginAdmin />} />
                    <Route path="/add-new-project/:id" element={cookies.access_token ? <ProjectAddNew /> : <LoginAdmin />} />
                    <Route path="/message/:id" element={cookies.access_token ? <AdminMessage /> : <LoginAdmin />} />
                    <Route path="/coupon/:id" element={cookies.access_token ? <Coupon /> : <LoginAdmin />} />
                    <Route path="/setting/:id" element={cookies.access_token ? <SettingAdmin /> : <LoginAdmin />} />
                </Routes>
            </div>
        </div>

    );
}

export default AdminRoutes;

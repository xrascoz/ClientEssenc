import React from 'react';

import './App.css';
import Header from './components/header/Header';
import Home from './page/home/Home';
import Footer from './components/footer/Footer';
import BlogDetails from './page/blog/BlogDetails';
import BlogPage from './page/blog/BlogPage';
import CreateBlog from './admin/page/Blog/CreateBlog';
import ServicesPage from './page/services/ServicesPage';
import ContactPage from './page/contact/ContactPage';
import ReviewPage from './page/review/ReviewPage';
import BookNowPage from './page/book-now/BookNowPage';

// User
import SingUp from "./page/register/SingUp"
import Login from './page/register/Login';
import ForgetPassword from './page/register/ForgetPassword';
import SubmitOtpUser from './page/register/SubmitOtpUser';
import Setting from './user/page/setting/Setting';
import Order from './user/page/order/Order';
import AppointmentUser from './user/page/appointment/AppointmentUser';
import AppointmentUserEnd from './user/page/appointment/AppointmentUserEnd';

import SuccessPay from './user/page/paymentPage/SuccessPay';
// Admin
import SingUpAdmin from './admin/page/register/SingUp';
import LoginAdmin from './admin/page/register/Login';
import ForgetPasswordAdmin from './admin/page/register/ForgetPassword';
import SubmitOtpUserAdmin from './admin/page/register/SubmitOtpUser';
import SettingAdmin from './admin/page/setting/Setting';
import AdminMessage from './admin/page/contact/AdminMessage';
import Coupon from './admin/page/coupon/Coupon';

import Appointment from './admin/page/appointment/Appointment';
import AppointmentEnd from './admin/page/appointment/AppointmentEnd';
import AddNewDate from './admin/page/add-new-date/AddNewDate';
import BlogAddNew from './admin/page/Blog/BlogAddNew';

// 404

import Page404 from './page/not-found/Page404';


import { Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import { useCookies } from "react-cookie"


function App() {
  const [cookies, setCookie] = useCookies(['access_token']);
  const [cookiesUser, setCookieUser] = useCookies(['access_token_User']);

  const location = useLocation();
  let pathLocation = useLocation().pathname

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    })

    let headerRemove = document.querySelector("header")
    let footerRemove = document.querySelector("footer")
    let phoneHeader = document.querySelector(".phone-header")

    if (pathLocation.includes("add-new") || pathLocation.includes("appointment") || pathLocation.includes("setting") || pathLocation.includes("message") || pathLocation.includes("coupon") ) {
      headerRemove.style.display = "none"
      footerRemove.style.display = "none"
      phoneHeader.style.display = "none"
    } else {
      headerRemove.style.display = "flex"
      footerRemove.style.display = "flex"
      phoneHeader.style.display = "flex"
    }

  }, [location.pathname])

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/our-services" element={<ServicesPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/book-now" element={<BookNowPage />} />

        {/* admin */}

        <Route path="/admin/sing-up" element={cookies.access_token ? <Home /> : <SingUpAdmin />} />
        <Route path="/admin/login" element={cookies.access_token ? <Home /> : <LoginAdmin />} />

        <Route path="/admin/sing-up" element={cookies.access_token ? <Home /> : <SingUp />} />
        <Route path="/admin/login" element={cookies.access_token ? <Home /> : <Login />} />
        
        <Route path="/admin/forgot-pass" element={<ForgetPasswordAdmin />} />
        <Route path="/admin/submit-otp-user" element={<SubmitOtpUserAdmin />} />
        <Route path="/admin/setting/:id" element={cookies.access_token ? <SettingAdmin /> : <LoginAdmin />} />

        <Route path="/admin/appointment/:id" element={cookies.access_token ? <Appointment /> : <LoginAdmin />} />
        <Route path="/admin/appointment-end/:id" element={cookies.access_token ? <AppointmentEnd /> : <LoginAdmin />} />
        <Route path="/admin/add-new-date/:id" element={cookies.access_token ? <AddNewDate /> : <LoginAdmin />} />
        <Route path="/admin/add-new-blog/:id" element={cookies.access_token ? <BlogAddNew /> : <LoginAdmin />} />
        <Route path="/admin/message/:id" element={cookies.access_token ? <AdminMessage /> : <LoginAdmin />} />
        <Route path="/admin/coupon/:id" element={cookies.access_token ? <Coupon /> : <LoginAdmin />} />

        {/* user */}

        <Route path="/sing-up" element={cookiesUser.access_token_User ? <Home /> : <SingUp />} />
        <Route path="/login" element={cookiesUser.access_token_User ? <Home /> : <Login />} />

        <Route path="/sing-up" element={cookiesUser.access_token_User ? <Home /> : <SingUpAdmin />} />
        <Route path="/login" element={cookiesUser.access_token_User ? <Home /> : <LoginAdmin />} />


        <Route path="/forgot-pass" element={<ForgetPassword />} />
        <Route path="/submit-otp-user" element={<SubmitOtpUser />} />
        <Route path="/setting/:id" element={cookiesUser.access_token_User ? <Setting /> : <Login />} />

        <Route path="/user/appointment/:id" element={cookiesUser.access_token_User ? <AppointmentUser /> : <Login />} />
        <Route path="/user/appointment-end/:id" element={cookiesUser.access_token_User ? <AppointmentUserEnd /> : <Login />} />
        <Route path="/order/:id/:price" element={cookiesUser.access_token_User ? <Order /> : <Login />} />
        <Route path="/success-pay/:idUser/:dateHour/:id/:dateHourEnd/:dateDay/:category" element={cookiesUser.access_token_User ? <SuccessPay /> : <Login />} />

        <Route path="*" element={ <Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

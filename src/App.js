import React from 'react';

import './App.css';
import Header from './components/header/Header';
import Home from './page/home/Home';
import Footer from './components/footer/Footer';

import BlogDetails from './page/blog/BlogDetails';
import BlogPage from './page/blog/BlogPage';


import ProjectDetails from "./page/project/ProjectDetails"
import ProjectPage from "./page/project/ProjectPage"

import ServicesPage from './page/services/ServicesPage';
import ContactPage from './page/contact/ContactPage';
import ReviewPage from './page/review/ReviewPage';
import BookNowPage from './page/book-now/BookNowPage';


import TeamPage from './page/team/TeamPage';

import ServicesDetails from './page/services/ServicesDetails';


// User
import UserRoutes from './user/page/userRoute/UserRoutes';
import SingUp from "./page/register/SingUp"
import Login from './page/register/Login';
import ForgetPassword from './page/register/ForgetPassword';
import SubmitOtpUser from './page/register/SubmitOtpUser';
import Order from './user/page/order/Order';
import SuccessPay from './user/page/paymentPage/SuccessPay';
// Admin
import AdminRoutes from './admin/page/routeAdmin/AdminRoutes';
// import SingUpAdmin from './admin/page/register/SingUp';
import LoginAdmin from './admin/page/register/Login';
import ForgetPasswordAdmin from './admin/page/register/ForgetPassword';
import SubmitOtpUserAdmin from './admin/page/register/SubmitOtpUser';
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

    if (pathLocation.includes("add-new") || pathLocation.includes("appointment") || pathLocation.includes("setting") || pathLocation.includes("message") || pathLocation.includes("coupon")) {
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


        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/project" element={<ProjectPage />} />



        <Route path="/contact" element={<ContactPage />} />
        <Route path="/our-services" element={<ServicesPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/book-now" element={<BookNowPage />} />
        <Route path="/team/:id" element={<TeamPage />} />
        <Route path="/services-details/:id" element={<ServicesDetails />} />


        {/* admin */}

        <Route path="/admin/*" element={cookies.access_token ? <AdminRoutes /> : <LoginAdmin />} />

        {/* <Route path="/admin/sing-up" element={cookies.access_token ? <Home /> : <SingUpAdmin />} /> */}
        <Route path="/admin/login" element={cookies.access_token ? <Home /> : <LoginAdmin />} />

        <Route path="/admin/forgot-pass" element={<ForgetPasswordAdmin />} />
        <Route path="/admin/submit-otp-user" element={<SubmitOtpUserAdmin />} />


        {/* user */}

        <Route path="/sing-up" element={cookiesUser.access_token_User ? <Home /> : <SingUp />} />
        <Route path="/login" element={cookiesUser.access_token_User ? <Home /> : <Login />} />

        {/* <Route path="/sing-up" element={cookiesUser.access_token_User ? <Home /> : <SingUpAdmin />} /> */}
        <Route path="/login" element={cookiesUser.access_token_User ? <Home /> : <LoginAdmin />} />


        <Route path="/forgot-pass" element={<ForgetPassword />} />
        <Route path="/submit-otp-user" element={<SubmitOtpUser />} />

        <Route path="/user/*" element={cookiesUser.access_token_User ? <UserRoutes /> : <LoginAdmin />} />


        <Route path="/order/:id/:price" element={cookiesUser.access_token_User ? <Order /> : <Login />} />
        <Route path="/success-pay/:idUser/:dateHour/:id/:dateHourEnd/:dateDay/:category" element={cookiesUser.access_token_User ? <SuccessPay /> : <Login />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

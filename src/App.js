
import './App.css';
import Header from './components/header/Header';
import Home from './page/home/Home';
import Footer from './components/footer/Footer';
import BlogDetails from './page/blog/BlogDetails';
import CreateBlog from './admin/page/CreateBlog';
import SingUp from "./page/register/SingUp"
import Login from './page/register/Login';
import BlogPage from './page/blog/BlogPage';
import ServicesPage from './page/services/ServicesPage';
import ContactPage from './page/contact/ContactPage';
import ReviewPage from './page/review/ReviewPage';
import BookNowPage from './page/book-now/BookNowPage';

import { Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

function App() {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    })
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
        <Route path="/admin/create-blog" element={<CreateBlog />} />
        <Route path="/sing-up" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

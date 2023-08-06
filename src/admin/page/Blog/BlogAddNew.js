import React from 'react'
import Navpar from '../../components/navpar/Navpar'
import Header from '../../components/header/Header';
import HeadOfSec from '../../components/head-of-sec/HeadOfSec';
import CreateBlog from './CreateBlog';
import BlogDashboard from './BlogDashboard';

function BlogAddNew() {
    return (
        <div className='grid-dashboard'>
            <Navpar />
            <div className='content-dashboard' >
                <Header />
                <HeadOfSec />
                <CreateBlog />
                <BlogDashboard />
            </div >
        </div >
    )
}

export default BlogAddNew
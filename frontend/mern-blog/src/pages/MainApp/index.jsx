import React from 'react'
import { Routes, Route } from 'react-router-dom'

// pages 
import { Header, Footer } from '../../component'
import Home from '../Home/index'
import CreateBlog from '../BlogPost/CreateBlog'
import DetailBlog from '../BlogPost/DetailBlog'

// style 
import './mainApp.scss'

const MainApp = () => {
    return (
        <div className="main-app-wrapper">
            <div className="header-wrapper">
                <Header />
            </div>

            <div className="content-wrapper">
                <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route path="/create-blog" element={<CreateBlog />} />
                    <Route path="/detail-blog" element={<DetailBlog />} />
                </Routes>
            </div>

            <div className="footer-wrapper">
                <Footer />
            </div>
        </div>
    )
}

export default MainApp
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// pages 
import { Header, Footer } from '../../component'
import Home from '../Home/index'
import CreatePost from '../BlogPost/CreatePost'
import DetailPost from '../BlogPost/DetailPost'

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
                    <Route path="/create-post" element={<CreatePost />} />
                    <Route path="/edit-post" element={<CreatePost />} />
                    <Route path="/detail-post" element={<DetailPost />} />
                </Routes>
            </div>

            <div className="footer-wrapper">
                <Footer />
            </div>
        </div>
    )
}

export default MainApp
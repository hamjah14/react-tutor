import React from 'react'
import { Routes, Route } from 'react-router-dom'

// pages
import Home from '../Home/index'
import CreateBlog from '../BlogPost/CreateBlog'
import DetailBlog from '../BlogPost/DetailBlog'

const MainApp = () => {
    return (
        <div className="app">
            <p>header</p>
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/create-blog" element={<CreateBlog />} />
                <Route path="/detail-blog" element={<DetailBlog />} />
            </Routes>

            <p>footer</p>
        </div>
    )
}
export default MainApp
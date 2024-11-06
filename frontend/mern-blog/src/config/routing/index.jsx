// libraries
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Home from '../../pages/Home'
import Login from '../../pages/Login'
import Register from '../../pages/Register'

const Routing = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing
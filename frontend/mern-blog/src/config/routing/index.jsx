// libraries
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import MainApp from '../../pages/MainApp'
import Login from '../../pages/Login'
import Register from '../../pages/Register'

const Routing = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<MainApp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    {/* <Route path="/auth/*" element={<Login />} /> */}
                    {/* <Route path="/logout" element={<Register />} /> */}
                    {/* <Route path="/error" element={<Register />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing
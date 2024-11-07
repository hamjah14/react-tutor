// libraries
import React from 'react'
import { useNavigate } from "react-router-dom"

// style
import './header.scss'

export const Header = () => {
    const navigate = useNavigate();

    function HomePage() {
        navigate("/");
    }

    function LoginPage() {
        navigate("/login");
    }

    return (
        <div className='header'>
            <p className='logo-app' onClick={HomePage}>Mern-Blog</p>
            <p className='menu-item' onClick={LoginPage}>Logout</p>
        </div>
    )
}

// libraries
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 

// assets
import logo from '../../../assets/logos/logo.svg';

// style
import './App.css';

// component
import Dashboard from '../Dashboard';
import Login from '../login';
import Register from '../Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navigation"> 
          <Link to="/*">Dashboard</Link>
          <Link to="/login">Login</Link> 
          <Link to="/register">Register</Link>
        </div> 

        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// libraries
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
// import { createStore } from 'redux';
import { Provider } from 'react-redux';

// assets
import logo from '../../../assets/logos/logo.svg';

// style
import './App.css';

// redux 
import { storeRedux } from '../../../../src/config/redux';

// component
import Dashboard from '../Dashboard';
import Login from '../login';
import Register from '../Register';


function App() {
  return (
    <Provider store={storeRedux}>
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
    </Provider>
  );
}

export default App;

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
    render(){
        return(
            <div>
                <p>Dashboard Page</p>
                <Link to="/registrasi">Go To Register</Link>
                <Link to="/dashboard">Go To Dashboard</Link>
            </div>
        )
    }
}

export default Dashboard;
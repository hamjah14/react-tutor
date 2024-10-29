// libraries
import React, { Component } from "react";
import { connect } from "react-redux";

import { actionChangeUser } from "../../../config/redux/action";

class Login extends Component {
    changeUserName = () => {
        this.props.changeUser()
    }

    render(){
        console.log(this.props.popupProps)

        return(
            <div>
                <p>Login Page {this.props.userProps}</p>


                <button>Go To Register</button>
                <button onClick={this.changeUserName}>Login</button>
                <button>Go To Dashboard</button>
            </div>
        )
    }
}
 
const mapStateToProps = (state) => {
    return {
        popupProps: state.popup,
        userProps: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeUser: () => dispatch(actionChangeUser()), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
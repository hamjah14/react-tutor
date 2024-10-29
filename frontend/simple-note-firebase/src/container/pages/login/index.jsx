// libraries
import React, { Component } from "react";
import { connect } from "react-redux";

import ActionType from "../../../config/redux/action/globalActionType";

class Login extends Component {

    render(){
        console.log(this.props.popupProps)

        return(
            <div>
                <p>Login Page</p>
                <button>Go To Register</button>
                <button>Go To Dashboard</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        popupProps: state.popup
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({type: ActionType.CHANGE_POPUP}), 
    }
}

export default connect(mapStateToProps, null)(Login);
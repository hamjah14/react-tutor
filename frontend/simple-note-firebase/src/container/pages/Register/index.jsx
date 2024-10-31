// libraries
import React, { Component } from "react"; 
import { connect } from 'react-redux'

// style
import './register.css';
 
// component
import { Button } from "../../../component/atoms/Button/índex";

// redux
import { actionRegisterAPI } from "../../../config/redux/action";
   
class Register extends Component {
     
    state = {
        email: '',
        password: '',
    }

    handleValueChange = (element) => { 
        this.setState({
            [element.target.id] : element.target.value
        })
    }
    
    handleSubmitForm = () => {
        let {email, password} = this.state  

        this.props.registerAPI({email, password})
    }

    render(){
        return(
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input-register" id="email" placeholder="Email" onChange={this.handleValueChange} />
                    <input className="input-register" id="password" placeholder="Password" type="password" onChange={this.handleValueChange} />

                    <Button onClick={this.handleSubmitForm} title="Resgister" loading={this.props.isLoading} />
                </div>
 
                {/* <button>Go To Login</button>
                <button>Go To Dashboard</button> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading : state.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    registerAPI : (data) => dispatch(actionRegisterAPI(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);
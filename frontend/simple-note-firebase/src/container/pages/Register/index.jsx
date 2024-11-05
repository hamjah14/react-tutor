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
            [element.target.id]: element.target.value
        })
    }

    handleSubmitForm = async () => {
        let { email, password } = this.state

        if (email !== '' && password !== '' && email !== undefined && password !== undefined) {
            const res = await this.props.registerAPI({ email, password }).catch(err => err);

            if (res) {
                console.log("registrasi sukses")

                this.setState({
                    email: '',
                    password: '',
                })

                window.location.href = '/login'
            } else {
                console.log("registrasi gagal")
            }
        }
    }

    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input-register" id="email" placeholder="Email" onChange={this.handleValueChange} value={this.state.email} />
                    <input className="input-register" id="password" placeholder="Password" type="password" onChange={this.handleValueChange} value={this.state.password} />

                    <Button onClick={this.handleSubmitForm} title="Resgister" loading={this.props.isLoading} />
                </div>

                {/* <button>Go To Login</button>
                <button>Go To Dashboard</button> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    registerAPI: (data) => dispatch(actionRegisterAPI(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);
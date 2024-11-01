// libraries
import React, { Component } from "react";
import { connect } from "react-redux"; 
 
// style
import './login.css';
 
// component
import { Button } from "../../../component/atoms/Button/índex";

// redux
import { actionLoginAPI } from "../../../config/redux/action"; 
   

class Login extends Component { 
    
    state = {
        email: '',
        password: '',
    }

    handleValueChange = (element) => { 
        this.setState({
            [element.target.id] : element.target.value
        })
    }
    
    componentDidMount(){
        console.log(this.props)
    }

    handleSubmitForm = async () => {
        const {email, password} = this.state   

        if(email !== '' && password !== '' && email !== undefined && password !== undefined){ 
            const res = await this.props.loginAPI({email, password}).catch(err => err);
 
            if(res){
                console.log("login sukses")

                this.setState({
                    email:'',
                    password: '',
                }) 
 
                window.location.href = '/'
            } else {
                console.log("logi gagal")
            }
        } 
    }
      
    render(){  
        return(
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Login Page</p>
                    <input className="input-login" id="email" placeholder="Email" onChange={this.handleValueChange} value={this.state.email} />
                    <input className="input-login" id="password" placeholder="Password" type="password" onChange={this.handleValueChange} value={this.state.password} />

                    <Button onClick={this.handleSubmitForm} title="Resgister" loading={this.props.isLoading} />
                </div> 


                {/* <button>Go To Login</button>
                <button onClick={this.changeUserName}>Login</button>
                <button>Go To Dashboard</button> */}
            </div>
        )
    }
}
 
const mapStateToProps = (state) => {
    return {
        popupProps: state.popup,
        userProps: state.user,
        isLoading : state.isLoading
    }
}
 
const mapDispatchToProps = (dispatch) => ({
    loginAPI : (data) => dispatch(actionLoginAPI(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
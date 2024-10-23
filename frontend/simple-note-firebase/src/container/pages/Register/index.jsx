import React, { Component } from "react"; 

// style
import './register.css';

// config 
import firebaseApp from  '../../../config/firebase'; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
   
class Register extends Component {
    

    state = {
        email: '',
        password: ''
    }

    handleValueChange = (element) => { 
        this.setState({
            [element.target.id] : element.target.value
        })
    }
    
    handleSubmitForm = () => {
        let {email, password} = this.state 
        const auth = getAuth(firebaseApp);
        console.log(auth) 

        


        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...

            
                console.log('ok ', user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            
                console.log('erro ', errorMessage);
        });
            

        // if(email !== '' && password !== '' && email !== undefined && password !== undefined){
        //     // [START auth_signup_password]
        //     firebase.auth().createUserWithEmailAndPassword(email, password)
        //     .then((userCredential) => {
        //         // Signed in 
        //         var user = userCredential.user;
                
                
        //         console.log('ok ', user);
        //     })
        //     .catch((error) => {
        //         var errorCode = error.code;
        //         var errorMessage = error.message;
                
        //         console.log('erro ', errorMessage);
        //     });
        //     // [END auth_signup_password] 
        // } else {
        //     console.log(' ga bisa')
        // }
    }

    render(){
        return(
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input-register" id="email" placeholder="Email" onChange={this.handleValueChange} />
                    <input className="input-register" id="password" placeholder="Password" type="password" onChange={this.handleValueChange} />

                    <button className="btn-register" onClick={this.handleSubmitForm}>Resgister</button>
                </div>
 
                {/* <button>Go To Login</button>
                <button>Go To Dashboard</button> */}
            </div>
        )
    }
}

export default Register;
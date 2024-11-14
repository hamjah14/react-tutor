import React from 'react'

// component
import { Input, Button, Gap, Link } from '../../component';

// style
import './register.scss'
import { RegisterBg } from '../../assets'

const Register = () => {
    return (
        <div className='main-page'>
            <div className='left'>
                <img className='ilustrasi-image' src={RegisterBg} alt='' />
            </div>
            <div className='right'>
                <p className="right">Register Page</p>
                <Input label="Fullname" placeholder="Fullname" />
                <Gap height={10} />
                <Input label="e-mail" placeholder="e-mail" />
                <Gap height={10} />
                <Input label="Password" placeholder="Password" />
                <Gap height={25} />
                <Button title="Register" />
                <Gap height={40} />
                <Link text="Login Page" path="/login" />
            </div>
        </div>
    )
}

export default Register
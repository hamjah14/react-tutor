import React from 'react'

// component
import { Input, Button, Gap, Link } from '../../../component';

// assets 
import { LoginBg } from '../../../assets'

const Login = () => {
    return (
        <div className='main-page'>
            <div className='left'>
                <img className='ilustrasi-image' src={LoginBg} alt='' />
            </div>
            <div className='right'>
                <p className="right">Login Page</p>
                <Input label="e-mail" placeholder="e-mail" />
                <Gap height={10} />
                <Input label="Password" placeholder="Password" />
                <Gap height={25} />
                <Button title="Login" />
                <Gap height={40} />
                <Link text="Belum punya akun? silahkan daftar" path="/register" />
            </div>
        </div>
    )
}

export default Login
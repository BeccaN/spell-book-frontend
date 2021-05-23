import React from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'

export default function LoginSignup() {

    return (
        <div className="d-flex justify-content-around login-signup">
            <Login />
            <div className="divider" />
            <Signup />
        </div>
    )
}

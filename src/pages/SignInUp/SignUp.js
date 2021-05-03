import React from 'react'
import "./SignUp.css"
import signup from '../../images/signup.gif'
const SignIn = () => {
    return (
        <div className="sign-container">
            <div className="up-form">
                <div className="heading">
                <h2>Sign up</h2>
                </div>
            <div className="wrap">
                <div className="f1">
                    <label>First Name</label>
                    <input type="text"/>
                    <span className="focus-input"></span>
                </div>
                <div className="f2">
                    <label>Username</label>
                    <input type="text"/>
                    <span className="focus-input"></span>
                </div>
            </div>
            <div className="wrap2">
                    <label>Email</label>
                    <input type="email"/>
                    <span className="focus-input2"></span>
            </div>
            <div className="wrap2">
                    <label>Password</label>
                    <input type="password"/>
                    <span className="focus-input2"></span>
           
            </div>
            <button className="btn">Register</button>
            </div>
            <div className="image">
                <img src={signup} className="img" alt="sigup"/>
            </div>
            
        </div>
    )
}

export default SignIn

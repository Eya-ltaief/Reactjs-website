import React from 'react'
import "./SignUp.css"
import signin from '../../images/signin.jpg'
const SignUp = () => {
    return (
        <div className="sign-container">
            <div className="image">
                <img src={signin} className="img" alt="signin"/>
            </div>
            <div className="up-form">
                <div className="heading">
                <h2>Sign In</h2>
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
            <button className="btn">Log In</button>
            </div>
            
            
        </div>
    )
}

export default SignUp
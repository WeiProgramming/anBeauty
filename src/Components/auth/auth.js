import React from 'react'
import './auth.css';

const Auth = () => {
    return (
        <div className="auth">
            <div className="auth__form">
                <div className="auth__input-container">
                    <label for="email">Email</label>
                    <input className="auth__input" name="email"/>
                </div>
                <div className="auth__input-container">
                    <label for="email">Username</label>
                    <input className="auth__input" name="email"/>
                </div>
                <div className="auth__input-container">
                    <label for="email">Password</label>
                    <input className="auth__input" name="email"/>
                </div>
                <div className="auth__input-container">
                    <label for="email">Confirm Password</label>
                    <input className="auth__input" name="email"/>
                </div>
                <div className="auth__btn-group">
                    <button type="submit">Sign Up</button>
                    <button type="submit">Clear Form</button>
                </div>
                <div className="auth__footer">
                    <a href="#">Forgot email?</a>
                    <a href="#">Already Registered?</a>
                </div>
            </div>
        </div>
    )
}

export default Auth;
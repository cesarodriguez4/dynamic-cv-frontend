import React from "react";
import './login.css'

function Login() {
    return (
        <div className="div-login">
            <div className="cover">
                <h1>Login</h1>
                <input type="text" placeholder="USERNAME"></input>
                <input type="password" placeholder="PASSWORD"></input>

                 <div className="login-btn">Login</div>
                 <div className="create-account">Create account</div>

                 <p className="text">Or login using</p>

                 <div className="alt-login"> 
                    <div className="facebook"></div>
                    <div className="google"></div>
                 </div>
            </div>
        </div>
    )
}

export {Login}
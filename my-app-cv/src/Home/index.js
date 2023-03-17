import React, {useState} from "react";
import './index.css'
import logo from '../img/kisspng-curriculum-vitae-management-afacere-cornell-univer-curriculum-vitae-template-5ad9584934a6c2.1741163815241933532157.png';
import {BurguerButton} from "../burguerbutton/BurguerButton";

function Home() {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <>
            <nav className="container">
                <div className="nav-bar">
                    <div class="logo-png">
                        <img src={logo} alt="logo" class="logo"/>
                    </div>

                    <div class={`navbar-right ${clicked ? 'active': ''}`}>
                        <a href="/">What me do</a>
                        <a href="/">Contact us</a>
                        <a href="/Login" className="login-nav">Login</a>
                    </div>
                </div>
            </nav>
            <div className="burguer">
                <BurguerButton clicked={clicked} handleClick={handleClick}/>
            </div>
        </>        
    )
}

export {Home}
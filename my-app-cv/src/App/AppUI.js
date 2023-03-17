import React from "react";
import { Home } from "../Home";
import { Login } from "../Login";

function AppUI() {
    return(
       <React.Fragment> 
            <Home/>
            <Login/>
       </React.Fragment> 
        
    )
}

export {AppUI}
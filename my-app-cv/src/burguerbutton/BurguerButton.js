import React from "react";
import './burgerbutton.css'

function BurguerButton(props) {
    return (
      
      <div onClick={props.handleClick} 
          class={`icon nav-icon-5 ${props.cliked ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
      </div>
    )    
}

export {BurguerButton};
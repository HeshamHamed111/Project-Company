import React from "react";

const Button = (props) => {
    return ( 
        <button onClick={props.onClick} 
        type={`${props.type ? props.type : "button"}`}
        >{props.children}</button>

     );
}
 
export default Button;
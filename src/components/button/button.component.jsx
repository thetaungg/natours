import React from "react";
import './button.styles.scss';

const Button = ({type, name}) => (
    <button className={`btn ${type}`} >
        {name}
    </button>
);

export default Button;
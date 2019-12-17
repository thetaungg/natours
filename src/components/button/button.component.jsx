import React from "react";
import './button.styles.scss';

const Button = ({type,color, content}) => (
    <button className={`btn ${type} btn--${color}`} >
        {content}
    </button>
);

export default Button;
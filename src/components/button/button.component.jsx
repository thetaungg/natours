import React from "react";
import './button.styles.scss';

const Button = ({type,color, content, anchorLink}) => (
    <a href={`#${anchorLink}`} className={`btn ${type} btn--${color}`} >
        {content}
    </a>
);

export default Button;
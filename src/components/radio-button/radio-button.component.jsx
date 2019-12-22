import React from "react";
import './radio-button.styles.scss';

const RadioButton = ({label}) => (
        <div>
            <input type="radio" id={label} className="radio-input" name='size'/>
            <label htmlFor={label} className="radio-label">
                <span className="radio-button"> </span>
                {label}
            </label>
        </div>
);

export default RadioButton;
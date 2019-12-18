import React from "react";
import './card.styles.scss';

const Card = ({heading,iconType,content}) => (
    <div className="feature-box text-align-center">
        <i className={`icon-${iconType} feature-box__icon`}></i>
        <h3 className="heading-tertiary margin-bottom-small">{heading}</h3>
        <p className="feature-box__text">
            {content}
        </p>
    </div>
);

export default Card;
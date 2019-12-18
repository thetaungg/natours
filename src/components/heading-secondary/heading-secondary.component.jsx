import React from "react";
import './heading-secondary.styles.scss';

const SecondaryHeading = ({text, alignment, marginDir, spacing}) => (
    <div className={`text-align-${alignment} margin-${marginDir}-${spacing}`}>
        <h2 className="heading-secondary">
            {text}
        </h2>
    </div>
);

export default SecondaryHeading;
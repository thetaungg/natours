import React from "react";
import './card-primary.styles.scss';
import Button from "../button/button.component";

const PrimaryCard = ({gradient,headingText, list, value}) => (
    <div className='card'>
        <div className="card__side card__side--front">
            <div className={`card__picture card__picture--${gradient}`}>
                &nbsp; {/*empty space symbol */}
            </div>
            <h4 className="card__heading text-align-right">
                <span className={`card__heading-span card__heading-span--${gradient}`}> {headingText} </span>
            </h4>
            <div className="card__details">
                <ul>
                    {
                        list.map((text, index) => <li key={index}>{text}</li>)
                    }
                </ul>
            </div>
        </div>
        <div className={`card__side card__side--back card__side--back--${gradient}`}>
            <div className="card__cta text-align-center">
                <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">${value}</p>
                </div>
                <Button content='Book Now!' type='btn-primary' color='white'/>
            </div>
        </div>

    </div>
);

export default PrimaryCard;
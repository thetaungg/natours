import React from "react";
import './navigation.styles.scss';

const Navigation = () => {

    const navToggle = () => {
        const navigation = document.getElementById('navigation');
        navigation.classList.toggle('navigation-show');
    };
    return(
        <div className="navigation" id='navigation'>
            <button className="navigation__btn" onClick={navToggle}>
                <span className="navigation__icon">&nbsp;</span>
            </button>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="/#" className="navigation__link"><span>01</span>About Natours</a></li>
                    <li className="navigation__item"><a href="/#" className="navigation__link"><span>02</span>Your benefits</a></li>
                    <li className="navigation__item"><a href="/#" className="navigation__link"><span>03</span>Popular Tours</a></li>
                    <li className="navigation__item"><a href="/#" className="navigation__link"><span>04</span>Stories</a></li>
                    <li className="navigation__item"><a href="/#" className="navigation__link"><span>05</span>Book now</a></li>
                </ul>
            </nav>
        </div>

    )
};

export default Navigation;
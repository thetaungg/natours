import React from "react";
import './section-footer.styles.scss';
import Grid from "../grid/grid.layout";

const FooterSection = ({logoUrl}) => (
    <footer className='footer'>
        <div className="footer__logo-box">
            <img className="footer__logo" src={logoUrl} alt="footer logo"/>
        </div>
        <Grid gridType='grid-1-1'>
            <div className="footer__navigation">
                <ul className="footer__list">
                    <li className="footer__item">
                        <a href="/#" className="footer__link">Company</a>
                    </li>
                    <li className="footer__item">
                        <a href="/#" className="footer__link">Contact Us</a>
                    </li>
                    <li className="footer__item">
                        <a href="/#" className="footer__link">Careers</a>
                    </li>
                    <li className="footer__item">
                        <a href="/#" className="footer__link">Privacy Policy</a>
                    </li>
                    <li className="footer__item">
                        <a href="/#" className="footer__link">Terms</a>
                    </li>
                </ul>
            </div>
            <p className="footer__copyright">
                Original design by <a href="/#" className="footer__link">Jonas Schmedtmann</a> for his online course <a
                href="/#" className="footer__link">Advanced CSS and SCSS</a> and, Translated into React and improved by <a
                href="/#" className="footer__link">Thet Aung</a>. Copyright &copy; to <a href="/#" className="footer__link">
                Jonas Schmedtmann</a> and <a href="/#" className="footer__link">Thet Aung</a>.
            </p>
        </Grid>
    </footer>
);

export default FooterSection;
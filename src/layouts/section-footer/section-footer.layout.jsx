import React from "react";
import './section-footer.styles.scss';
import Grid from "../grid/grid.layout";

const FooterSection = ({lowDensityLogoLarge, highDensityLogoLarge, lowDensityLogoSmall, highDensityLogoSmall}) => ( //responsive images
    <footer className='footer'>
        <div className="footer__logo-box">
            <picture className="footer__logo"> {/*picture tag let you specify multiple images for different screen sizes*/}
                <source src={lowDensityLogoSmall} srcSet={`${lowDensityLogoSmall} 1x, ${highDensityLogoSmall} 2x`} media="(max-width: 37.5rem)"/> {/* src is for the browser that doesn't support srcset*/}
                <img src={lowDensityLogoLarge} srcSet={`${lowDensityLogoLarge} 1x, ${highDensityLogoLarge} 2x`} alt="footer logo"/> {/*density switch; small pic for low density resolution devices and vice versa */}
            </picture>
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
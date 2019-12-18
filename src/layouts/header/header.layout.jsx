import React from "react";
import './header.styles.scss';
import logoWhite from '../../assets/images/logo-white.png';
import Button from "../../components/button/button.component";

const HeaderSection = () => (
    <header className='header'>
        <div className='header__logo-box'>
            <img className='header__logo' src={logoWhite} alt='Logo'/> {/*because of webpack you can only import images like this */}
        </div>
        <div className='header__text-box text-align-center'>
            <h1 className='heading-primary'>
                <span className='heading-primary--main'>Outdoors</span>
                <span className='heading-primary--sub'> is where life happens</span>
            </h1>
            <Button type='btn-primary' color='white' content='Discover our Tours'/>
        </div>
    </header>
);

export default HeaderSection;
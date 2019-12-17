import React from "react";
import './home.styles.scss';
import HeaderSection from "../../layouts/header/header.layout";
import AboutSection from "../../layouts/about/about.layout";

const HomePage = () => (
    <div className='home-page'>
        <HeaderSection/>
        <main>
            <AboutSection/>
        </main>
    </div>
);

export default HomePage;
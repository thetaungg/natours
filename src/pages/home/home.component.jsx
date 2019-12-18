import React from "react";
import './home.styles.scss';
import HeaderSection from "../../layouts/header/header.layout";
import AboutSection from "../../layouts/about/about.layout";
import FeaturesSection from "../../layouts/section-features/features.layout";
import ToursSection from "../../layouts/section-tours/section-tours.layout";

const HomePage = () => (
    <div className='home-page'>
        <HeaderSection/>
        <main>
            <AboutSection/>
            <FeaturesSection/>
            <ToursSection/>
        </main>
    </div>
);

export default HomePage;
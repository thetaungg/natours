import React from "react";
import './home.styles.scss';
import HeaderSection from "../../layouts/header/header.layout";
import AboutSection from "../../layouts/about/about.layout";
import FeaturesSection from "../../layouts/section-features/features.layout";
import ToursSection from "../../layouts/section-tours/section-tours.layout";
import StoriesSection from "../../layouts/section-stories/section-stories.layout";
import BookingSection from "../../layouts/section-booking/section-booking.layout";
import FooterSection from "../../layouts/section-footer/section-footer.layout";

import FooterLogo from '../../assets/images/logo-green-2x.png'
import Navigation from "../../components/navigation/navigation.component";

const HomePage = () => (
    <div className='home-page'>
        <Navigation/>
        <HeaderSection/>
        <main>
            <AboutSection/>
            <FeaturesSection/>
            <ToursSection/>
            <StoriesSection/>
            <BookingSection/>
        </main>
        <FooterSection logoUrl={FooterLogo}/>
    </div>
);

export default HomePage;
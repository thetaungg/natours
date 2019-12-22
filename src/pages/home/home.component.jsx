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
import Popup from "../../components/popup/popup.component";

import Img1 from "../../assets/images/nat-8.jpg";
import Img2 from "../../assets/images/nat-9.jpg";


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
        <Popup img1Url={Img1} img2Url={Img2} popupId='popup' popupCloseAnchor='section-tours'/> {/*popupId and popupCloseAnchors are need to popup to anchored with a button and closed to an anchoredPosition e.g if we set popupCLoseAnchor to the id of the header when you push close icon, the page scroll to the header section*/}
    </div>
);

export default HomePage;
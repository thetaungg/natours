import React from "react";
import './home.styles.scss';
import HeaderSection from "../../layouts/header/header.layout";
import AboutSection from "../../layouts/about/about.layout";
import FeaturesSection from "../../layouts/section-features/features.layout";
import ToursSection from "../../layouts/section-tours/section-tours.layout";
import StoriesSection from "../../layouts/section-stories/section-stories.layout";
import BookingSection from "../../layouts/section-booking/section-booking.layout";
import FooterSection from "../../layouts/section-footer/section-footer.layout";

import highDensityLogoLarge from '../../assets/images/logo-green-2x.png';
import lowDensityLogoLarge from '../../assets/images/logo-green-1x.png'
import highDensityLogoSmall from '../../assets/images/logo-green-small-2x.png';
import lowDensityLogoSmall from '../../assets/images/logo-green-small-1x.png'

import Navigation from "../../components/navigation/navigation.component";
import Popup from "../../components/popup/popup.component";

import Img1Large from "../../assets/images/nat-8.jpg";
import Img2Large from "../../assets/images/nat-9.jpg";
import Img1Small from "../../assets/images/nat-8-small.jpg";
import Img2Small from "../../assets/images/nat-9-small.jpg";


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
        <FooterSection lowDensityLogoLarge={lowDensityLogoLarge} highDesityLogoLarge={highDensityLogoLarge} lowDensityLogoSmall={lowDensityLogoSmall} highDensityLogoSmall={highDensityLogoSmall}/>
        <Popup img1Large={Img1Large} img2Large={Img2Large} img1Small={Img1Small} img2Small={Img2Small}
               popupId='popup' popupCloseAnchor='section-tours'/> {/*popupId and popupCloseAnchors are need to popup to anchored with a button and closed to an anchoredPosition e.g if we set popupCLoseAnchor to the id of the header when you push close icon, the page scroll to the header section*/}
    </div>
);

export default HomePage;
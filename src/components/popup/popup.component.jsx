import React from "react";
import './popup.styles.scss';
import SecondaryHeading from "../heading-secondary/heading-secondary.component";
import Button from "../button/button.component";
import Hyphenate from 'react-hyphen';



const Popup = ({img1Large, img2Large, img1Small, img2Small, popupId, popupCloseAnchor}) => {
    return(
        <div className="popup" id={popupId}>
            <div className="popup__content">
                <div className="popup__left">
                    <img className='popup__image' srcSet={`${img1Small} 1x, ${img1Large} 4x`} alt="Tour-pic"/>
                    <img className='popup__image' srcSet={`${img2Small} 1x, ${img2Large} 4x`} alt="Tour-pic"/>

                </div>
                <div className="popup__right">
                    <a href={`#${popupCloseAnchor}`} className="popup__close">&times;</a>
                    <SecondaryHeading text='Start Booking Now' marginDir='bottom' spacing='small'/>
                    <h2 className="heading-tertiary margin-bottom-small">
                        Important &ndash; Please read those terms before booking
                    </h2>
                    <p className='popup__text'><Hyphenate>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet debitis dolorum, eum fuga itaque officiis quisquam quo saepe ut! Culpa cum dicta eaque non quas quos sequi sit soluta! Blanditiis debitis delectus deleniti doloremque dolores eius, eligendi esse fugiat impedit ipsum modi nam nesciunt non porro sequi, tenetur, veniam! Alias consequatur et expedita explicabo ipsam maxime tempore voluptas voluptatem!</Hyphenate></p>
                    <div className='text-align-center'>
                        <Button content='Book Now' type='btn-primary' color='green'/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Popup;
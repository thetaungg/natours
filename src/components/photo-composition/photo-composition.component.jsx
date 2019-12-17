import React from "react";
import './photo-composition.styles.scss';
import Pic1 from "../../assets/images/nat-1-large.jpg";
import Pic2 from "../../assets/images/nat-2-large.jpg";
import Pic3 from "../../assets/images/nat-3-large.jpg";

const PhotoComposition = () => (
    <div className='composition'>
        <img src={Pic1} alt="firstPic" className="composition__photo composition__photo--p1"/>
        <img src={Pic2} alt="secondPic" className="composition__photo composition__photo--p2"/>
        <img src={Pic3} alt="thirdPic" className="composition__photo composition__photo--p3"/>
    </div>
);

export default PhotoComposition;
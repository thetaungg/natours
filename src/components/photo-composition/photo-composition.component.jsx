import React from "react";
import './photo-composition.styles.scss';
import Pic1Large from "../../assets/images/nat-1-large.jpg";
import Pic1Small from "../../assets/images/nat-1.jpg";
import Pic2Large from "../../assets/images/nat-2-large.jpg";
import Pic2Small from "../../assets/images/nat-2.jpg";
import Pic3Large from "../../assets/images/nat-3-large.jpg";
import Pic3Small from "../../assets/images/nat-3.jpg";

const PhotoComposition = () => (
    <div className='composition'> {/* change the width depending on the screen size AND resolution, so, we don't also need to specify density*/}
        <img className="composition__photo composition__photo--p1"
            src={Pic1Small} srcSet={`${Pic1Small} 300w, ${Pic1Large} 1000w`}
             sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
             alt="firstPic"/> {/*w is width of the image(in pixels), we specify it so that the browser can choose which image is best depending on the screen size, sizes are for the actual of the image that take space in each break point after we applied styles, e.g at max of 600px each image take palace 30% of vw */}
        <img className="composition__photo composition__photo--p2"
             src={Pic2Small} srcSet={`${Pic2Small} 300w, ${Pic2Large} 1000w`}
             sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
             alt="secondPic"/>
        <img className="composition__photo composition__photo--p3"
             src={Pic3Small} srcSet={`${Pic3Small} 300w, ${Pic3Large} 1000w`}
             sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
             alt="thirdPic"/>

        {/*<img src={Pic1Large} alt="firstPic" className="composition__photo composition__photo--p1"/>*/}
        {/*<img src={Pic2Large} alt="secondPic" className="composition__photo composition__photo--p2"/>*/}
        {/*<img src={Pic3Large} alt="thirdPic" className="composition__photo composition__photo--p3"/>*/}
    </div>
);

export default PhotoComposition;
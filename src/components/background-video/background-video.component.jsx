import React from "react";
import './background-video.styles.scss';

const BackgroundVideo = ({videoUrlMp4, videoUrlWebm}) => (
    <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
            <source src={videoUrlMp4} type='video/mp4'/>
            <source src={videoUrlWebm} type='video/webm'/>
            You browser is Not Support the Background Video!
        </video>
    </div>
);

export default BackgroundVideo;
import React from "react";
import './section-stories.styles.scss';
import SecondaryHeading from "../../components/heading-secondary/heading-secondary.component";
import StoryBoard from "../../components/story-board/story-board.component";
import Img1 from "../../assets/images/nat-8.jpg";
import Img2 from "../../assets/images/nat-9.jpg";
import Button from "../../components/button/button.component";

import bgVideoMp4 from '../../assets/videos/video.mp4';
import bgVideoWebm from '../../assets/videos/video.webm';
import BackgroundVideo from "../../components/background-video/background-video.component";



const StoriesSection = () => {
    const blindText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus distinctio dolorum, eaque fugit illum ipsum maiores nesciunt nihil omnis quaerat quo quos ratione, reiciendis saepe soluta suscipit ut, vitae voluptas.';
    return(
        <section className="section-stories">
            <BackgroundVideo videoUrlMp4={bgVideoMp4} videoUrlWebm={bgVideoWebm}/>
            <SecondaryHeading text='We make people genuinely happy' marginDir='bottom' spacing='big' alignment='center'/>

            <div className="section-row">
                <StoryBoard
                    heading='I had the best week ever with my family'
                    paragraph={blindText}
                    imgUrl={Img1}
                    name='Mary Smith'/>
            </div>
            <div className='section-row'>
                <StoryBoard
                    heading='WOW! My life is completely different now'
                    paragraph={blindText}
                    imgUrl={Img2}
                    name='Jack Wilson'/>
            </div>
            <div className='section-row text-align-center'>
                <Button content='Read all stories &rarr;' type='btn-text' color=''/>
            </div>
        </section>
    )
};

export default StoriesSection;
import React from "react";
import './story-board.styles.scss';

const StoryBoard = ({name,heading, paragraph, imgLarge, imgSmall}) => (
    <div className="story-board">
        <figure className="story-board__shape">
            <img className="story-board__img" srcSet={`${imgSmall} 1x, ${imgLarge} 4x`} alt="Person on a tour"/>
            <figcaption className="story-board__caption text-align-center">
                {name}
            </figcaption>
        </figure>
        <div className="story-board__text">
            <h3 className="heading__tertiary margin-bottom-small">
                {heading}
            </h3>
            <p>
                {paragraph}
            </p>
        </div>
    </div>
);

export default StoryBoard;
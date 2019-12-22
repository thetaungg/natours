import React from "react";
import './section-tours.styles.scss';

import SecondaryHeading from "../../components/heading-secondary/heading-secondary.component";
import Grid from "../grid/grid.layout";
import PrimaryCard from "../../components/card-primary/card-primary.component";
import Button from "../../components/button/button.component";

const ToursSection = () => (
    <section className="section-tours" id='section-tours'>
        <SecondaryHeading text='most popular tours' marginDir='bottom' alignment='center' spacing='big'/>
        <Grid gridType='grid-1-1-1'>
            <PrimaryCard gradient='secondary' headingText='The sea explorer'
                         list={['3 day tours','Up to 30 people','2 tour guides','sleep in cozy hotels', 'Difficulty: easy']}
                        value='289' btnAnchorLink='popup'/>
            <PrimaryCard gradient='primary' headingText='The Forest Hiker'
                         list={['5 day tours','Up to 40 people','6 tour guides','sleep in provided tents', 'Difficulty: medium']}
                        value='497' btnAnchorLink='popup'/>
            <PrimaryCard gradient='tertiary' headingText='The Snow Adventurer'
                         list={['7 day tours','Up to 15 people','3 tour guides','sleep in provided tents', 'Difficulty: hard']}
                        value='897' btnAnchorLink='popup'/>
        </Grid>

        <div className='tours-btn'>
            <Button content='Discover all tours' type='btn-primary' color='green'/>
        </div>
    </section>
);

export default ToursSection;
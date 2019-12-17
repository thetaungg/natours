import React from "react";
import './about.styles.scss';
import Grid from "../grid/grid.layout";
import SecondaryHeading from "../../components/heading-secondary/heading-secondary.component";

const AboutSection = () => (
    <section className="section-about">
        <SecondaryHeading text='Exciting tours for adventurous people'
                          marginDir='bottom'
                          spacing='8'
                          alignment='center'/>
        <Grid gridType='grid-1-1'>
            <h1>
                Text content
            </h1>
            <h1>
                Image composition
            </h1>
        </Grid>
    </section>
);

export default AboutSection;

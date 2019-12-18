import React from "react";
import './about.styles.scss';

import Grid from "../grid/grid.layout";
import SecondaryHeading from "../../components/heading-secondary/heading-secondary.component";
import Button from "../../components/button/button.component";
import PhotoComposition from "../../components/photo-composition/photo-composition.component";

const AboutSection = () => (
    <section className="section-about">
        <SecondaryHeading text='Exciting tours for adventurous people'
                          marginDir='bottom'
                          spacing='big'
                          alignment='center'/>
        <Grid gridType='grid-1-1'>

            <div>
                <h3 className='heading-tertiary margin-bottom-small'>
                    You're going to fall in love with nature
                </h3>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut
                    autem culpa doloremque doloribus esse facilis, in minus nobis obcaecati odio perferendis,
                    porro quasi quibusdam sit suscipit tempore, vero voluptatem!
                </p>

                <h3 className='heading-tertiary margin-bottom-small'>
                    Live adventures like you never have before
                </h3>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut
                    autem culpa doloremque doloribus esse facilis, in minus nobis obcaecati odio
                </p>

                <Button type='btn-text' content='Learn more &rarr;'/>
            </div>

            <PhotoComposition/>
        </Grid>
    </section>
);

export default AboutSection;

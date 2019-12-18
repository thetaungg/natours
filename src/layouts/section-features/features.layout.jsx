import React from "react";
import './features.styles.scss';
import Grid from "../grid/grid.layout";
import SecondaryCard from "../../components/card-secondary/card-secondary.component";

const FeaturesSection = () => {
    const blindText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. autem aperiam, asperiores culpa doloremque doloribus esse';
    return(
        <section className="section-features">
            <Grid gridType='grid-1-1-1-1'>
                <SecondaryCard content={blindText} iconType='basic-world' heading='Explore the world'/>
                <SecondaryCard content={blindText} iconType='basic-compass' heading='Meet nature'/>
                <SecondaryCard content={blindText} iconType='basic-map' heading='Find your way'/>
                <SecondaryCard content={blindText} iconType='basic-heart' heading='Live a healthier live'/>
            </Grid>
        </section>
    )
};

export default FeaturesSection;
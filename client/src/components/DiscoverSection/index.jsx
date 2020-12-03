import React from 'react'
import { Title, Underline, TitleBody } from '../SectionElements';
import { DiscoverContainer, Grid } from "./DiscoverSectionElements";
import { Diseases } from '../../utils/DiseasesData';
import Card from './Card';

const DiscoverSection = () => {
    return (
        <DiscoverContainer id="discover">
            <Title>Discover</Title>
            <Underline />
            <TitleBody>
                Diseases which have been eradicted through immunisation.
            </TitleBody>
            <Grid>
                {Diseases.map(({ title, description, link }, k) =>
                    <Card key={k} title={title} description={description} link={link}/>
                )}   
            </Grid>
        </DiscoverContainer>
    )
}

export default DiscoverSection

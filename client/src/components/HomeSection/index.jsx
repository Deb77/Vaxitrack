import React from 'react'
import { Button } from '../DiscoverSection/CardElements';
import { HomeContainer, Text, Subtext } from './HomeSectionElements';

const HomeSection = () => {
    return (
        <HomeContainer id="home">
            <Text>We are committed to your child's health</Text>
            <Subtext>Our doctors are on call 24/7. Same day appointment available.</Subtext>
            <Button>Book an appointment</Button>
        </HomeContainer>
    )
}

export default HomeSection

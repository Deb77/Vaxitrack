import React from 'react'
import {
    AboutContainer,
    AboutBody
} from './AboutSectionElements';
import { Title, Underline, TitleBody } from '../SectionElements';
    
const AboutSection = () => {
    return (
        <AboutContainer id="about">
            <Title>About</Title>
            <Underline />
            <TitleBody>
                Immunization, is the process by which
                an individual's immune system becomes fortified against an agent
            </TitleBody>
            <AboutBody>
                Immunization is a global health and development success story, saving 
                millions of lives every year. Vaccines reduce risks of getting a disease 
                by working with your body’s natural defences to build protection. 
                When you get a vaccine, your immune system responds.We now have vaccines 
                to prevent more than 20 life-threatening diseases, helping people of all ages 
                live longer, healthier lives. Immunization currently prevents 2-3 million deaths 
                every year from diseases like diphtheria, tetanus, pertussis, influenza and measles.
                Immunization is a key component of primary health care and an indisputable human right.
                It’s also one of the best health investments money can buy. Vaccines are also critical 
                to the prevention and control of infectious-disease outbreaks.
            </AboutBody>
        </AboutContainer>
    )
}

export default AboutSection

import React from 'react'
import { FooterContainer, Icon, Copyrights } from "./FooterElements";
import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
    return (
        <FooterContainer>
            <Icon href="https://github.com/Deb77/Vaxitrack" target="_blank">
                <AiFillGithub/>
            </Icon>
            <Copyrights>
                Copyrights&copy;2020||DeborahMendes
            </Copyrights>
        </FooterContainer>
    )
}

export default Footer

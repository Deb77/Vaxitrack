import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import DiscoverSection from '../components/DiscoverSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer'; 
import HomeImage from '../assets/Home.jpg'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const HomePageWrapper = styled.div`
        background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
        url(${HomeImage})
        no-repeat center fixed;
        background-size: cover;
        height: 100%;
    `

    return (
        <>
            <HomePageWrapper>
                <Sidebar isOpen={isOpen} toggle={toggle}/>
                <Navbar toggle={toggle} />
                <HomeSection/>
                <AboutSection />
                <DiscoverSection />
                <ContactSection />
                <Footer/>
            </HomePageWrapper>
        </>
    )
}

export default Home

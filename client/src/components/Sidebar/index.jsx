import React from 'react'
import PropTypes from 'prop-types'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={toggle}
                    >
                        Home
                    </SidebarLink>
                    <SidebarLink
                        to="about"
                        onClick={toggle}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                    >
                        About
                    </SidebarLink>
                    <SidebarLink
                        to="discover"
                        onClick={toggle}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                    >
                        Discover
                    </SidebarLink>
                    <SidebarLink
                        to="contact"
                        onClick={toggle}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                    >
                        Contact Us
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/login">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

Sidebar.propType = {
    isOpen: PropTypes.bool,
    toggle: PropTypes.func
}

export default Sidebar

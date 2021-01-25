import React from 'react'
import { CgProfile } from 'react-icons/cg';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    ProfileIcon,
} from './Navbar/NavbarElements';

const Header = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">Vaxitrack</NavLogo>
            </NavbarContainer>
                <ProfileIcon>
                    <CgProfile/> 
                </ProfileIcon>  
        </Nav>
    )
}

export default Header

import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${props=> props.theme.colors.primary};
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 100;
    width: 100%;
    color: ${props=> props.theme.colors.secondary};

    @media screen and ( max-width: 960px ){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color:#fff;
    text-decoration:none;
    font-size: 2rem;
    font-family: Lobster;
    cursor: pointer;
    justify-self: flex-start;

    &: hover{
        color:#fff;
        text-decoration:none;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        right: 0;
        top:0;
        transform: translate(-100%, 35%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const ProfileIcon = styled.div`
    font-size: 1.8rem;
    cursor: pointer;
    margin: auto 0;
    @media screen and (max-width: 1200px){
        display: block;
        position: absolute;
        right: 0;
        top:0;
        transform: translate(-100%, 35%);
    }
`

export const NavMenu = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    display: flex;
    align-items: center;
    height: 80px;
    margin: 0 10px;
`

export const NavLinks = styled(LinkS)`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    font-size: 1.2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: ${props=> props.theme.colors.secondary};
    cursor: pointer;

    &:hover{
        color: #000;
        transition: 0.2s ease-in-out;
        text-decoration: none;
    }

    &.active{
        color:#000;
        border-bottom: 5px solid #000;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #000;
    padding: 10px 22px;
    color: ${props=> props.theme.colors.secondary};
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${props=> props.theme.colors.secondary};
        color: #010606;
        text-decoration: none;
    }
`
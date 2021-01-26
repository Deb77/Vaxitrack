import styled from 'styled-components';

export const Grid = styled.div`
    margin: 50px 8%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 15px;

    @media screen and ( max-width: 1300px ){
        grid-template-columns: auto auto auto;
        margin: 50px 5%;
    }
    @media screen and ( max-width: 1000px ){
        grid-template-columns: auto auto;
    }
    @media screen and ( max-width: 600px ){
        grid-template-columns: auto;
    }
    
`

export const AddIcon = styled.p`
    text-align: center;
    font-size: 3rem;
    cursor: pointer;

    &:hover{
        color: ${props=> props.theme.colors.primary}
    }
`

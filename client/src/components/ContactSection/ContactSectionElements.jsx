import styled from 'styled-components';

export const ContactContainer = styled.section`
    padding: 3%;
    color: ${props=> props.theme.colors.secondary};
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;

    @media screen and ( max-width: 920px ){
        font-size: 1.3rem;
    }
`

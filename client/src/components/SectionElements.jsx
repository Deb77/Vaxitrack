import styled from 'styled-components';

export const Title = styled.div`
    font-size: 2rem;
    font-weight: bold;
    text-align: center;

    @media screen and ( max-width: 1050px ){
        font-size: 1.7rem;
    }
`

export const Underline = styled.div`
    width: 70px;
    height: 3px;
    background: #a43f49;
    margin: 0 auto;
`

export const TitleBody = styled.div`
    margin: 10px;
    text-align: center;
`
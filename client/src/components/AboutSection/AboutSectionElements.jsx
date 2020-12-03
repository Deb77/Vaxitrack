import styled from 'styled-components';

export const AboutContainer = styled.div`
    height: calc(100vh - 80px);
    font-size: 1.5rem;
    color: #fff;
    padding: 3%;

    @media screen and ( max-width: 1300px ){
        font-size: 1.3rem;
    }
    @media screen and ( max-width: 1050px ){
        font-size: 1.2rem;
    }
    @media screen and ( max-width: 900px ){
        font-size: 1rem;
    }
    @media screen and ( max-width: 400px ){
        font-size: 0.9rem;
    }
`

export const AboutBody = styled.div`
    margin: 50px auto;
    text-align: center;
    background: rgba(250, 250, 250, 0.1);
    width: 80%;
    padding: 3%;
    border-radius: 10px;
    
    @media screen and ( max-width: 1000px ){
        margin: 30px auto;
        width: 95%;
    }
`

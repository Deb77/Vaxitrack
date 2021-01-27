import styled from 'styled-components';
import { GiLoveInjection } from 'react-icons/gi';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgba(250, 250, 250, 0.7);
    padding: 20px;
    border-radius: 10px;
    width:100% ;
    max-height: 350px;
    font-size: 1.2rem;
`

export const Icon = styled(GiLoveInjection)`
    border-radius: 50%;
    height: 50px;
    width: 50px;
    padding:10px;
    background-color: #000;
`

export const CardTitle = styled.div`
    color: #000;
    font-size: 1.7rem;
    font-weight: bold;
    @media screen and ( max-width: 920px ){
        font-size: 1.4rem;
    }
`

export const CardBody = styled.div`
    color: #000;
    margin-top: 5px;
`

export const Date = styled.p`
    color: gray;
`
export const Box = styled.div`
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
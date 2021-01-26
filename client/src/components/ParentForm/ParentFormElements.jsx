import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto;

    @media screen and ( max-width: 522px ){
        grid-template-columns: auto;
    }
`

export const GridItem = styled.div`
    @media screen and ( max-width: 522px ){
        margin: 10px;
    }
`

export const Title = styled.p`
    margin: 2%;
    font-size: 1.5rem;
    text-align: center;
`

export const Text = styled.div`
    color: ${props => props.theme.colors.secondary}
`

export const RadioButtonContainer = styled.div`
    display: flex;
    align-items: center;
`

export const RadioButton = styled.input.attrs({
    type: "radio"
})`
margin: 10px;
`

export const CloseButton = styled.p`
    margin: 2%;
    font-size: 2rem;
    min-width: 1100px;
    text-align: center;
    cursor: pointer;

    @media screen and ( max-width: 1150px ){
        min-width: 800px;
    }

    @media screen and ( max-width: 850px ){
        min-width: 600px;
    }

    @media screen and ( max-width: 650px ){
        min-width: 0px;
    }
`
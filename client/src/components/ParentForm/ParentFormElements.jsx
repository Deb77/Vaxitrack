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
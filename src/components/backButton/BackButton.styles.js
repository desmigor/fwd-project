import styled, { createGlobalStyle } from 'styled-components'
import arrow from '../../assets/arrow.png'

export default createGlobalStyle `
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
`
export const BackButtonDiv = styled.div `
    padding-top: 90px;
    display: flex;
    gap: 10px;
    cursor: pointer;
    margin-left: 190px;
`
export const ArrowImage = styled.div `
    background-image: url(${arrow});
    width: 16px;
    height: 20px;
`

export const ButtonText = styled.div `
    color: black;
    font-size: 20px;
    font-family: Lato;
    font-size: 16px;
    font-weight: 700;
`
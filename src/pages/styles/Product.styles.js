import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
`

export const ProductInfo = styled.div `
    display: flex;
    justify-content: flex-start;
    padding-top: 30px;
    margin-left: 190px;
    padding-bottom: 100px;
`
export const ImageDescr = styled.div `
    flex-direction: column;
    img {
        width: 480px;
        height: 480p;
        border-radius: 4px;
        border: 1px solid #757575;
    }

    h4 {
        color: black;
        font-family: Lato;
        font-size: 16px;
        font-weight: 700;
    }

    p {
        color: #757575;
        font-family: Lato;
        font-size: 16px;
        font-weight: 300;
        width: 480px;
    }
`

export const TittlePrice = styled.div `
    display: flex;
    flex-direction: column;
    padding-left: 30px;

    p {
        color: #757575;
        height: 40px;
        font-family: Lato;
        font-size: 18px;
        font-weight: 300;
        height: 20px;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    h3 {
        color: black;
        font-family: Lato;
        font-size: 32px;
        font-weight: 700;
        width: 600px;
        height: 30px;
        margin-top: 16px;
        padding-bottom: 50px;
    }

    h5 {
        color: black;
        font-family: Lato;
        font-size: 28px;
        font-weight: 300;
        margin-top: 0px;
        margin-bottom: 20px;
    }
`
export const AddCartButton = styled.div `
    background-color: #3F51B5;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14);
    color: white;
    font-size: 20px;
    font-family: Lato;
    font-size: 14px;
    font-weight: 700;
    width: 200px;
    height: 36px;
    text-align: center;
    padding-top: 16px;
    border-radius: 4px;
    cursor: pointer;
`
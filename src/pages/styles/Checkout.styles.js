import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
`

export const CheckoutForm1 = styled.div `
  display:flex;
  flex-direction:column;
  background-color: white;
  width: 600px;
  height: 560px;
  margin-top: 120px;
  margin-left: 28%;
  padding: 24px;
  border-radius: 4px;
  filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.2));

  h4 {
    color: #3F51B5;
    font-family: Lato;
    font-size: 32px;
    font-weight: 400;
    margin-top: 0px;
    margin-left: 222px;
    margin-bottom: 20px;
  }

  h6 {
    color: black;
    font-family: Lato;
    font-size: 24px;
    font-weight: 400;
    margin-top: 32px;
    margin-left: 0px;
    margin-bottom: 0px;
  }
`
export const CheckoutForm2 = styled.div `
  display:flex;
  flex-direction:column;
  background-color: white;
  width: 600px;
  height: 426px;
  margin-top: 32px;
  margin-left: 28%;
  padding: 24px;
  border-radius: 4px;
  filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.2));

  h4 {
    color: #3F51B5;
    font-family: Lato;
    font-size: 32px;
    font-weight: 400;
    margin-top: 0px;
    margin-left: 222px;
    margin-bottom: 20px;
  }

  h6 {
    color: black;
    font-family: Lato;
    font-size: 24px;
    font-weight: 400;
    margin-top: 32px;
    margin-left: 0px;
    margin-bottom: 0px;
  }
`

export const Steps = styled.div `
  display: flex;
  align-items: center;
  gap: 16px;
  padding-left: 25%;

  p {
    margin: 0px;
    color: black;
    font-family: Lato;
    font-size: 16px;
    font-weight: 300;
  }

  img {
    width: 24px;
    height: 24px;
  }
`

export const InputSmallDiv = styled.div `
  display: flex;
  gap: 16px;
`

export const InputSmall = styled.input `
  background: #ffffff;
  outline: none;
  border: none;
  border-bottom: 1px solid #c4c4c4;
  width: 376px;
  height: 46px;
  padding-left: 12px;
  margin-top: 20px;
  font-size: 16px;
  font-family: Lato;
`

export const InputLarge = styled.input `  
  background: #ffffff;
  outline: none;
  border: none;
  border-bottom: 1px solid #c4c4c4;
  width: 586px;
  height: 46px;
  padding-left: 12px;
  margin-top: 16px;
  font-size: 16px;
  font-family: Lato;
`

export const NextButton = styled.button `
  margin-left: 400px;
  background-color: #3f51b5;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 18px;
  font-family: Lato;
  font-weight: 400;
  width: 200px;
  height: 60px;
  margin-top: 20px;
  margin-bottom: 0px;
`
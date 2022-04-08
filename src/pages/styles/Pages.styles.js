import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
  @import url('https://fonts.googleapis.com/css?family=Roboto');
`

export const Label = styled.label `
  font-family: Roboto, sans-serif;
  font-size: 11pt;
`

export const ForgotPass = styled.legend `
  color: #008B3D;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 14px;
  margin-top: 3px;
  text-align: left;
`

export const Card = styled.div `
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #008B3D;
  box-sizing: border-box;
  height: 529px;
  margin: 6rem auto 8.1rem auto;
  width: 372px;
`

export const CardContent = styled.div `
  padding: 12px 44px;
`

export const CardTitle = styled.div `
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  padding-bottom: 23px;
  padding-top: 13px;
  color: #008B3D;
`

export const LoginBtn = styled.input `
  background: #008B3D;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  color: white;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  margin-top: 50px;
  padding: 20px;
  width: 100%;
`

export const SignupBtn = styled.input `
  background: #008B3D;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  color: white;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  margin-top: 50px;
  padding: 20px;
  width: 100%;
`

export const Form = styled.form `
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`

export const FormContent = styled.input `
  background: #ffffff;
  outline: none;
  padding-top: 14px;
  border: 1px solid #008B3D;
  border-radius: 10px;
  width: 100%;
  height: 25px;
`

export const WelcomePage = createGlobalStyle `
  body {
    background: white;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    width: 100%;
  }
`

export const Welcome = styled.div `
  color: #008B3D;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: xxx-large;
`

export const HomeInfo = styled.div `
  padding-top: 600px;
  padding-bottom: 100px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, 120px);
  grid-row-gap: 2.5em;
  grid-column-gap: 1em;
`
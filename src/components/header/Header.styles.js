import styled, { createGlobalStyle } from 'styled-components'
import logo from '../../assets/logo.png'

export default createGlobalStyle `
  @import url('https://fonts.googleapis.com/css?family=Roboto');
`

export const Logo = styled.div `
  background-image: url(${logo});
  width: 97px;
  height: 37px;
  margin-top: 14px;
`

export const LogoTitle = styled.div `
  color: white;
  display: flex;
  flex-direction: row;
  margin: auto;
`

export const LoginOrRegister = styled.div `
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: end;
  float: right;
`

export const HeaderDiv = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  background: #008b3d;
  width: 100%;
  height: 64px;
  display: flex;
`

export const Title = styled.div `
  color: white;
  font-size: 20px;
  margin-top: 4px;
  padding: 20px;
`

export const Login = styled.div `
  color: white;
  font-size: 20px;
  margin-top: 4px;
  cursor: pointer;
  padding: 20px;
  margin: auto;
`

export const Register = styled.div `
  color: white;
  font-size: 20px;
  margin-top: 4px;
  cursor: pointer;
  margin: auto;
  padding: 20px;
`

export const Home = styled.div `
  color: white;
  font-size: 20px;
  margin-top: 4px;
  cursor: pointer;
  margin: auto;
  padding: 20px;
`

export const Logout = styled.div `
  color: white;
  font-size: 20px;
  margin-top: 4px;
  cursor: pointer;
  margin: auto;
  padding: 20px;
`
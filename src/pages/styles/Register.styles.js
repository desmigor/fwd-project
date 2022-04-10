import styled, { createGlobalStyle } from 'styled-components'
import lockImage from '../../assets/lock-icon.png'

export default createGlobalStyle `
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
`

export const RegForm = styled.div `
  padding-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormInput = styled.input `
  background: #ffffff;
  outline: none;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  width: 376px;
  height: 46px;
  padding-left: 12px;
  margin-top: 20px;
  font-size: 16px;
  font-family: Lato;
`

export const FormHeader = styled.h1 `
  color: black;
  font-size: 20px;
  font-family: Lato;
  font-size: 20px;
  font-weight: 700;
`

export const LockImage = styled.div `
  background-image: url(${lockImage});
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
`

export const RegisterButton = styled.button `
  background-color: #3f51b5;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  color: white;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  font-family: Lato;
  font-weight: 400;
  width: 400px;
  height: 60px;
  margin-top: 20px;
`
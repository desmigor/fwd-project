import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
  @import url('https://fonts.googleapis.com/css?family=Roboto');
`

export const FooterDiv = styled.div `
  border-top: 1px solid #008B3D;
  position: fixed;
  bottom: 0;
  right: 0;
  background: white;
  width: 100%;
  height: 50px;
  margin: 0;
  display: flex;
  justify-content: center;
`

export const Email = styled.div `
  color: #008B3D;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: medium;
  margin: auto;
`
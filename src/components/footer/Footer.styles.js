import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
`

export const FooterDiv = styled.div `
  border-top: 1px solid #DBDEF1;
  background-color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Copyright = styled.div `
  color: #757575;
  font-family: Lato;
  font-size: 16px;
  font-weight: 400;
`
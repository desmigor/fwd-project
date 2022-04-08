import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
  @import url('https://fonts.googleapis.com/css?family=Roboto');
`

export const PersonCardStyle = styled.div `
  background: #DFEEE6;
  border-radius: 10px;
  height: 100%;
  padding: 10px;
  width: 400px;
`

export const PersonCardItem = styled.div `
  padding: 5px;
  align-content: center;
`

export const PersonItem = styled.div `
  display: flex;
`

export const PersonCardKey = styled.div `
  color: #008B3D;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
`

export const PersonCardValue = styled.div `
  color: #008B3D;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
`

export const PersonAvatar = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
`
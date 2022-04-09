import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
`

export const PageTitle = styled.h1 `
  color: #3F51B5;
  padding-top: 50px;
  margin-left: 190px;
  font-family: Lato;
  font-size: 46px;
  font-weight: 400;
`
export const Grid = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`
export const h4 = styled.h4 `
  color: black;
  font-size: 20px;
  font-family: Lato;
  font-size: 20px;
  font-weight: 700;
`
export const ProdCard = styled.div `
  background: #FFFFFF;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  width: 280px;
  height: 350px;
  display: flex;
  gap: 3px;
  align-items: flex-end;
  padding: 16px;
  overflow: hidden;
  position: relative;

  img {
  position: static;
  width: 280px;
  height: 194px;
  left: 0px;
  top: 0px;
  border-radius: 4px 4px 0px 0px;
  }
  h4 {
  color: black;
  font-size: 20px;
  font-family: Lato;
  font-size: 20px;
  font-weight: 700;
  }

  p {
  color: black;
  height: 40px;
  font-size: 20px;
  font-family: Lato;
  font-size: 14px;
  font-weight: 300;
  }

  button {
    background-color: #3F51B5;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14);
    color: white;
    font-size: 20px;
    font-family: Lato;
    font-size: 14px;
    font-weight: 300;
    width: 38px;
    height: 36px;
    float: right;
    padding: 16px;

  }
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
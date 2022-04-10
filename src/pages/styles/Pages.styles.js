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
  padding-bottom: 100px;
  margin-left: 10%;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`
export const Title = styled.h4 `
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
  width: 340px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 16px;

  img {
    padding-top: 16px;
    width: 50%;
    height: 50%;
    text-align: center;
    margin-left: 25%;
  }
  h4 {
  color: black;
  font-family: Lato;
  font-size: 16px;
  font-weight: 700;
  }

  p {
  color: #757575;
  height: 40px;
  font-family: Lato;
  font-size: 14px;
  font-weight: 300;
  }
`
export const ProdButton = styled.div `
  background-color: #3F51B5;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14);
  color: white;
  font-size: 20px;
  font-family: Lato;
  font-size: 14px;
  font-weight: 700;
  width: 120px;
  height: 36px;
  text-align: center;
  padding-top: 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 216px;

`
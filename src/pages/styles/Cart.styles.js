import styled, { createGlobalStyle } from 'styled-components'
import cross from '../../assets/delete.png'
import imageprod from '../../assets/product-image.png'

export default createGlobalStyle `
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
`
export const Cartinfo = styled.div `
  display: flex;
  gap: 20px;
  margin-left: 190px;
  padding-bottom: 100px;
`
export const CartProducts = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;
`
    // Cart product List
export const CartCard = styled.div `
  width: 620px;
  height: 196px;
  background: #FFFFFF;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  display: flex;
`
export const ProductImage = styled.div `
  background-image: url(${imageprod});
  background-repeat: no-repeat;
  width: 196px;
  height: 100%;
  border-radius: 4px 0px 0px 4px;
`

export const ProductDetails = styled.div `
  padding-left: 16px;
  width: 300px;
  h4 {
    color: black;
    font-family: Lato;
    font-size: 18px;
    font-weight: 700;
  }
  p {
    color: #757575;
    font-family: Lato;
    font-size: 16px;
    font-weight: 300;
  }
`
export const CrossPrice = styled.div `
  width: 100px;
  padding-top: 10px;
  padding-left: 20px;
`
export const CrossImage = styled.div `
  background-image: url(${cross});
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  float: right;
  padding-right: 10px;
  cursor: pointer;
`

export const ProductPrice = styled.div `
    color: black;
    font-family: Lato;
    font-size: 20px;
    font-weight: 700;
    text-align: right;
    padding-top: 130px;
    padding-right: 24px;
`
    // Cart Summary
export const CartSummary = styled.div `
  width: 380px;
  height: 310px;
  background: #FFFFFF;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 0px 16px 16px 16px;

  h4 {
    color: black;
    font-family: Lato;
    font-size: 24px;
    font-weight: 700;
    margin-top: 16px;
  }
  
`
export const CartButton = styled.button `
  background-color: #3F51B5;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 20px;
  font-family: Lato;
  font-size: 14px;
  font-weight: 400;
  width: 210px;
  height: 60px;
  margin-left: 164px;
`

export const ProductTotals = styled.div `
  display: flex;
  justify-content: space-between;
  p {
    color: black;
    font-family: Lato;
    font-size: 16px;
    font-weight: 300;
  }

  h4 {
    color: black;
    font-family: Lato;
    font-size: 20px;
    font-weight: 700;
  }

`
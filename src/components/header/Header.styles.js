import styled, { createGlobalStyle } from 'styled-components'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart.png'
import profile from '../../assets/profile.png'
import cartHover from '../../assets/cart-hover.png'
import profileHover from '../../assets/profile-hover.png'

export default createGlobalStyle `
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
`

export const HeaderDiv = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  background: #3F51B5;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.div `
  background-image: url(${logo});
  width: 225px;
  height: 32px;
  margin-left: 200px;
`

export const Links = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  padding-right: 200px;
`

export const Catalogue = styled.div `
  color: white;
  height: 20px;
  font-size: 20px;
  cursor: pointer;
  font-family: Lato;
  font-size: 16px;
  font-weight: 400;

  :hover {
    color: #F7996E;
    text-decoration: underline;
  }

`

export const Electronics = styled.div `
  color: white;
  font-size: 20px;
  cursor: pointer;
  font-family: Lato;
  font-size: 16px;
  font-weight: 400;

  :hover {
    color: #F7996E;
    text-decoration: underline;
  }
`
export const Cart = styled.div `
  background-image: url(${cart});
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  cursor: pointer;

  :hover {
    background-image: url(${cartHover});
  }
`

export const Profile = styled.div `
  background-image: url(${profile});
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  cursor: pointer;

  :hover {
    background-image: url(${profileHover});
  }
`
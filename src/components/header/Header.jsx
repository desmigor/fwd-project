import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderDiv, Logo, Links, Catalogue, Electronics, Cart, Profile } from './Header.styles'

function Header() {
  return (
    <div>
      <HeaderDiv>
        <NavLink style={{ textDecoration: 'none' }} to="/">
          <Logo />
        </NavLink>
        <Links>
          <NavLink style={{ textDecoration: 'none' }} to="/">
            <Catalogue>All Products</Catalogue>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to="/electronics">
            <Electronics>Electronics</Electronics>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to="/cart">
            <Cart />
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to="/register">
            <Profile />
          </NavLink>
        </Links>
      </HeaderDiv>
    </div>
  )
}

export default Header

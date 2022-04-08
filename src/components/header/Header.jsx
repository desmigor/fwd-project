import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { LogoTitle, Title, HeaderDiv, Logo, LoginOrRegister, Login, Register, Home, Logout } from '../ui/Header.styles'
import authService from '../../services/auth.service'

function Header() {
  const history = useHistory()
  const handleLogout = () => {
    authService.logout()
    window.sessionStorage.setItem('isLoggedIn', false)
    history.replace('/')
  }

  return (
    <div>
      <HeaderDiv>
        <LogoTitle>
          <Logo />
          <Title>FWD Homework</Title>
        </LogoTitle>
        {!authService.isAuthorized() ? (
          <>
            <LoginOrRegister>
              <NavLink style={{ textDecoration: 'none' }} to="/">
                <Home>Home</Home>
              </NavLink>
              <NavLink style={{ textDecoration: 'none' }} to="/login">
                <Login>Login</Login>
              </NavLink>
              <NavLink style={{ textDecoration: 'none' }} to="/register">
                <Register>Register</Register>
              </NavLink>
            </LoginOrRegister>
          </>
        ) : (
          <LoginOrRegister>
            <NavLink style={{ textDecoration: 'none' }} to="/">
              <Home>Home</Home>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} to="/home">
              <Home>View Users</Home>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} to="/" onClick={handleLogout}>
              <Logout>Logout</Logout>
            </NavLink>
          </LoginOrRegister>
        )}
      </HeaderDiv>
    </div>
  )
}

export default Header

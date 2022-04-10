import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { RegForm, FormHeader, LockImage, FormInput, RegisterButton } from '../styles/Register.styles'

function Register() {
  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <Header />
      <RegForm>
        <LockImage />
        <FormHeader>Create Account</FormHeader>
        <FormInput placeholder="Email" />
        <FormInput placeholder="Password" />
        <NavLink to="/checkout1">
          <RegisterButton>SIGN UP</RegisterButton>
        </NavLink>
      </RegForm>
      <Footer />
    </div>
  )
}

export default Register

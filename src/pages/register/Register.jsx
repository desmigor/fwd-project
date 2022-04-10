import React from 'react'
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
        <RegisterButton>SIGN UP</RegisterButton>
      </RegForm>
      <Footer />
    </div>
  )
}

export default Register

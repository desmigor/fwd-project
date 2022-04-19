import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { CheckoutForm2, Steps, InputSmallDiv, InputSmall, InputLarge, NextButton } from '../styles/Checkout.styles'
import Step1Inactive from '../../assets/step1-inactive.png'
import Step2Active from '../../assets/step2-active.png'
import BackButton from '../../components/backButton/BackButton'

function Checkout2() {
  return (
    <div>
      <NavLink style={{ textDecoration: 'none' }} to="/checkout1">
        <BackButton />
      </NavLink>
      <CheckoutForm2>
        <h4>Checkout</h4>
        <Steps>
          <img src={Step1Inactive} alt="" />
          <p>Shipping address</p>
          <img src={Step2Active} alt="" />
          <p>Payment details</p>
        </Steps>
        <h6>Payment Details</h6>
        <InputLarge placeholder="Card number *" />
        <InputSmallDiv>
          <InputSmall placeholder="Valid thru *" />
          <InputSmall type="password" placeholder="CVC code *" />
        </InputSmallDiv>
        <InputLarge placeholder="Cardholder *" />
        <NavLink to="/catalogue">
          <NextButton>Complete</NextButton>
        </NavLink>
      </CheckoutForm2>
      <Header />
      <Footer />
    </div>
  )
}

export default Checkout2

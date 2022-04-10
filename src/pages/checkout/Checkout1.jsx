import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { CheckoutForm1, Steps, InputSmallDiv, InputSmall, InputLarge, NextButton } from '../styles/Checkout.styles'
import Step1Active from '../../assets/step1-active.png'
import Step2Inactive from '../../assets/step2-inactive.png'

function Checkout1() {
  return (
    <div>
      <CheckoutForm1>
        <h4>Checkout</h4>
        <Steps>
          <img src={Step1Active} alt="" />
          <p>Shipping address</p>
          <img src={Step2Inactive} alt="" />
          <p>Payment details</p>
        </Steps>
        <h6>Shipping address</h6>
        <InputSmallDiv>
          <InputSmall placeholder="First name *" />
          <InputSmall placeholder="Second name *" />
        </InputSmallDiv>
        <InputLarge placeholder="Address line 1 *" />
        <InputLarge placeholder="Address line 2 *" />
        <InputSmallDiv>
          <InputSmall placeholder="City" />
          <InputSmall placeholder="State/Province/Region" />
        </InputSmallDiv>
        <InputSmallDiv>
          <InputSmall placeholder="Zip/Postal code *" />
          <InputSmall placeholder="Country*" />
        </InputSmallDiv>
        <NavLink to="/checkout2">
          <NextButton>Next</NextButton>
        </NavLink>
      </CheckoutForm1>
      <Header />
      <Footer />
    </div>
  )
}

export default Checkout1

import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { PageTitle } from '../styles/Pages.styles'
import {
  Cartinfo,
  CartCard,
  CartSummary,
  CartProducts,
  ProductDetails,
  CrossImage,
  ProductImage,
  CrossPrice,
  ProductPrice,
  ProductTotals,
  CartButton
} from '../styles/Cart.styles'

function Cart() {
  return (
    <div>
      <Header />
      <PageTitle> Shopping Cart </PageTitle>
      <Cartinfo>
        <CartProducts>
          <CartCard>
            <ProductImage />
            <ProductDetails>
              <h4>Hoodie Always Original Graphic</h4>
              <p>Color: Wonder White</p>
              <p>Size: M</p>
              <p>Quantity: 1</p>
            </ProductDetails>
            <CrossPrice>
              <CrossImage />
              <ProductPrice>$1234.99</ProductPrice>
            </CrossPrice>
          </CartCard>
          <CartCard>
            <ProductImage />
            <ProductDetails>
              <h4>Hoodie Try Original Graphic</h4>
              <p>Color: Wonder White</p>
              <p>Size: M</p>
              <p>Quantity: 1</p>
            </ProductDetails>
            <CrossPrice>
              <CrossImage />
              <ProductPrice>$134.99</ProductPrice>
            </CrossPrice>
          </CartCard>
        </CartProducts>
        <CartSummary>
          <h4>Cart Summary</h4>
          <ProductTotals>
            <p>3 products</p>
            <p>$65.99</p>
          </ProductTotals>
          <ProductTotals>
            <p>Delivery</p>
            <p>$15.99</p>
          </ProductTotals>
          <ProductTotals>
            <h4>Total</h4>
            <h4>$1354.99</h4>
          </ProductTotals>
          <CartButton>PROCEED TO CHECKOUT</CartButton>
        </CartSummary>
      </Cartinfo>
      <Footer />
    </div>
  )
}

export default Cart

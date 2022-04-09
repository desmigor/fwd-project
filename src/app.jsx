import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Catalogue from './pages/catalogue/Catalogue'
import Electonics from './pages/electronics/Electronics'
import Cart from './pages/cart/Cart'
import Register from './pages/register/Register'
import Orders from './pages/orders/Orders'
import Product from './pages/product/Product'
import Checkout1 from './pages/checkout/Checkout1'
import Checkout2 from './pages/checkout/Checkout2'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/electronics">
          <Electonics />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/checkout1">
          <Checkout1 />
        </Route>
        <Route path="/checkout2">
          <Checkout2 />
        </Route>
        <Route path="/">
          <Catalogue />
        </Route>
        <Route>404</Route>
      </Switch>
    </BrowserRouter>
  )
}
export default App

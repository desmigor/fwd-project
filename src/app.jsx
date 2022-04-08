import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Catalogue from './pages/catalogue/Catalogue'
import Electonics from './pages/electronics/Electronics'
import Cart from './pages/cart/Cart'
import Register from './pages/register/Register'

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
        <Route path="/">
          <Catalogue />
        </Route>
        <Route>404</Route>
      </Switch>
    </BrowserRouter>
  )
}
export default App

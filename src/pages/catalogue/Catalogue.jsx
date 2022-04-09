import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { PageTitle, Grid, ProdCard, h4 } from '../styles/Pages.styles'

function Home() {
  const [catal, SetCatal] = useState()

  const getCatal = async () => {
    const api = await fetch('https://fakestoreapi.com/products')
    const data = await api.json()
    SetCatal(data.product)
    console.log(data)
    console.log(data[0].title)
  }

  useEffect(() => {
    getCatal()
  }, [])

  return (
    <div>
      <Header />
      <PageTitle> Catalogue </PageTitle>
      <Footer />
    </div>
  )
}

export default Home

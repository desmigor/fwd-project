import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { PageTitle, Grid, ProdCard, ProdButton } from '../styles/Pages.styles'

function Home() {
  const [catal, SetCatal] = useState([])

  const getCatal = async () => {
    const check = localStorage.getItem('eletronics')
    if (check) {
      SetCatal(JSON.parse(check))
    } else {
      const api = await fetch('https://fakestoreapi.com/products/category/electronics')
      const data = await api.json()
      localStorage.setItem('eletronics', JSON.stringify(data))
      SetCatal(data)
      // console.log(data)
      // console.log(data[0].title)
    }
  }

  useEffect(() => {
    getCatal()
  }, [])

  return (
    <div>
      <PageTitle> Electronics </PageTitle>
      <Grid>
        {catal.map((product) => {
          return (
            <ProdCard key={product.id}>
              <img src={product.image} alt="" />
              <h4>{product.title}</h4>
              <p>{product.category}</p>
              <NavLink style={{ textDecoration: 'none' }} to={`/product/${product.id}`}>
                <ProdButton>${product.price}</ProdButton>
              </NavLink>
            </ProdCard>
          )
        })}
      </Grid>
      <Header />
      <Footer />
    </div>
  )
}

export default Home

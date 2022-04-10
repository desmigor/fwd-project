import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import BackButton from '../../components/backButton/BackButton'
import { ProductInfo, ImageDescr, TittlePrice, AddCartButton } from '../styles/Product.styles'

function Product() {
  const [details, setDetails] = useState({})
  const params = useParams()

  const fetchDetails = async () => {
    const api = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const data = await api.json()
    setDetails(data)
    // console.log(data)
    // console.log(data.title)
  }

  useEffect(() => {
    fetchDetails()
  }, [params.id])

  return (
    <div>
      <Header />
      <NavLink style={{ textDecoration: 'none' }} to="/catalogue">
        <BackButton />
      </NavLink>
      <ProductInfo>
        <ImageDescr>
          <img src={details.image} alt="" />
          <h4>DESCRIPTION</h4>
          <p>{details.description}</p>
        </ImageDescr>
        <TittlePrice>
          <p>{details.category}</p>
          <h3>{details.title}</h3>
          <h5>${details.price}</h5>
          <NavLink style={{ textDecoration: 'none' }} to="/cart">
            <AddCartButton>Add To Cart</AddCartButton>
          </NavLink>
        </TittlePrice>
      </ProductInfo>
      <Footer />
    </div>
  )
}

export default Product

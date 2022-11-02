import React from 'react'
import Categories from '../components/Categories'
import Slider from '../components/Slider'
import Footer from './Footer'
import ProductList from './ProductList'

const Products = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <ProductList />
      <Footer />
    </div>
  )
}

export default Products
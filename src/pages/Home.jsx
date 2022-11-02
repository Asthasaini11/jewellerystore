import React from 'react'
import {
  BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";
import Announcement from '../components/announcement'
import Navbar from '../components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Products from '../components/Products'
import Details from '../components/Details'
import Cart from '../components/Cart'
import Default from '../components/Default'
import Model from '../components/Model';

const Home = () => {
  return (
    <div>

      <Announcement />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Products />}></Route>
        <Route exact path='/details' element={<Details />}></Route>
        <Route exact path='/cart' element={<Cart />} ></Route>
        <Route path='*' element={<Default />} ></Route>
      </Routes>
      <Model />


    </div>
  )
}

export default Home

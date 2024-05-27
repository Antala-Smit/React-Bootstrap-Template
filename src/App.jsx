import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './header/Header'
import Banner from './benner/Benner'
import Product from './product/Product'
import Offers from './offers/Offers'
import Contact from './contact/Contact'
import Deal from './deal/Deal'
import People from './people/People'
import Latest from './latest/Latest'
import Footer from './footer/Footer'


function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <Product/>
      <Offers/>
      <Contact/>
      <Deal/>
      <People/>
      <Latest/>
      <Footer/>
    </>
  )
}

export default App

import React from 'react'
import Menware from '../components/menware'
import Header from '../components/header'
import Electronics from '../components/electronics'
import Cosmetics from '../components/cosmetics'
import GraphicsCards from '../components/GraphicsCards'
import Footer from '../components/footer'
import BackButton from '../components/BackButton'
const AllProducts = () => {
  return (
    <div>
        <Header/>
        <BackButton/>
     <GraphicsCards/>
        <Electronics/>
        <Cosmetics/> 
          <Menware/>
          <Footer/>
    </div>
  )
}

export default AllProducts




import React from 'react'
import BestSellers from '../components/bestSellers';
import Header from '../components/header';
import Promotional from "../components/promotional";
import Footer from '../components/footer';
import PunchCard from '../components/punchCard';

const main = () => {
  return (
    <div>
      <Header/>
      <PunchCard/>
      <BestSellers/>
       <Promotional/>
       <Footer/>
    </div>
  )
}

export default main

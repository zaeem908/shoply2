import React, { useState } from 'react'
import Header from '../components/header'
import Menware from '../components/menware'
import Electronics from '../components/electronics'
import Cosmetics from '../components/cosmetics'
import GraphicsCards from '../components/GraphicsCards'
import Footer from '../components/footer'
import BestSellers from '../components/bestSellers'
import { Link } from 'react-router-dom'

const Categories = () => {
    const [component,setComponent] = useState(null);

    function showComponent(comp:any) {
       setComponent(comp)
    }

  return (
    <div>
      <Header/>
      <div className='flex justify-center'>
        <button onClick={() => showComponent('fabric')} className=' bg-gray-200 p-3 m-2 rounded hover:bg-gray-500 hover:text-white'>Fabrics</button>
        <button onClick={() => showComponent('cosmetic')} className=' bg-gray-200 p-3 m-2 rounded hover:bg-gray-500 hover:text-white'>Cosmetics</button>
        <button onClick={() => showComponent('graphic')} className=' bg-gray-200 p-3 m-2 rounded hover:bg-gray-500 hover:text-white'>Graphics Cards</button>
        <button onClick={() => showComponent('electronic')} className=' bg-gray-200 p-3 m-2 rounded hover:bg-gray-500 hover:text-white'>Electronics</button>
      </div>
            <button  className="w-[5rem] h-[5rem] m-4 outline outline-gray-400 rounded-2xl p-2"> <Link to={'/'}><img src="https://cdn-icons-png.flaticon.com/512/0/340.png" alt="img"></img></Link></button>
      <div>
           {component === 'fabric' && <Menware/>}
           {component === 'cosmetic' && <Cosmetics/>}
           {component === 'graphic' && <GraphicsCards/>}
           {component === 'electronic' && <Electronics/>}
      </div>
      <BestSellers/>
      <Footer/>
    </div>
  )
}

export default Categories



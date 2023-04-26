import React from 'react'
import { Link } from 'react-router-dom'

const punchCard = () => {
  return (
    <div>
            <body className="text-center w-full h-96 bg-gradient-to-r from-blue-200 to-green-200 justify-center content-center grid">
                <div>
                  <p className="inline text-3xl font-bold">Shopping made easy by Shoply</p>
                  <p>We provide best quality products to our customers at best prices</p>
                  <p>Shop with us and get excitig discounts!</p>
                 <button  className="bg-gradient-to-r text-2xl from-blue-400 to-green-400 p-5 m-7 rounded-2xl text-white"><Link to={'/allproducts'}>Shop Now</Link></button> 
                </div>  
      </body>
    </div>
  )
}

export default punchCard



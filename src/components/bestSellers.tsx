import React from 'react'
import Electronics from './electronics'
import Menware from "./menware";

const bestSellers = () => {
  return (
    <div>
        <h1 className="text-center p-10 text-3xl font-bold">Best Selling Products</h1>
       <Electronics/>
       <Menware/>
    </div>
  )
}

export default bestSellers

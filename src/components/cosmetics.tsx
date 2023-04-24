import React from 'react'
import { useCounterStore } from '../store'
const Cosmetics = () => {
const {increment} = useCounterStore()
  return (
    <div>
      <div className="grid grid-cols-4 w-full h-[35rem] gap-3">
      <div className="text-center m-4 h-min rounded-3xl shadow-xl hover:bg-gray-100">
          <img src="https://static-01.daraz.pk/p/69ca803792e5af93c2d8817634145792.jpg" alt=""/>
          <p className="font-bold">Perfume</p>
          <p>IP68 extreme water and dust resistance, 1000 nits brightness, 1.88 Inch display</p>
         <p className="text-green-800 text-xl m-2 font-bold">90$</p>
          <button onClick={increment} className="bg-blue-200 hover:bg-blue-600 hover:text-white p-2 rounded-xl m-2">Add to Cart</button>
        </div>

        <div className="text-center m-4 h-min rounded-3xl shadow-xl hover:bg-gray-100">
          <img src="https://static-01.daraz.pk/p/f1e2f9ba5bc35b78f79463a61c6144a4.jpg" alt=""/>
          <p className="font-bold">Makeup Kit</p>
          <p>512GB storage 16GB ram big battery big display 1 year official warranty by brand</p>
         <p className="text-green-800 text-xl m-2 font-bold">300$</p>
          <button onClick={increment} className="bg-blue-200 hover:bg-blue-600 hover:text-white p-2 rounded-xl m-2">Add to Cart</button>
        </div>

        <div className="text-center m-4 h-min rounded-3xl shadow-xl hover:bg-gray-100">
          <img src="https://static-01.daraz.pk/p/0b9810e6b1905fd9671347d685748087.jpg_720x720.jpg_.webp" alt=""/>
          <p className="font-bold">Makeup brush Pack</p>
          <p>512GB storage 6GB ram big battery big display 1 year official warranty by brand</p>
         <p className="text-green-800 text-xl m-2 font-bold">1000$</p>
          <button  onClick={increment} className="bg-blue-200 hover:bg-blue-600 hover:text-white p-2 rounded-xl m-2">Add to Cart</button>
        </div>

        <div className="text-center m-4 h-min rounded-3xl shadow-xl hover:bg-gray-100">
          <img src="https://static-01.daraz.pk/p/7b3f616f086514d20f8c74e44dba345b.jpg_720x720.jpg_.webp" alt=""/>
          <p className="font-bold">Kit</p>
          <p>512GB storage 16GB ram big battery big display 1 year official warranty by brand</p>
         <p className="text-green-800 text-xl m-2 font-bold">670$</p>
          <button  onClick={increment} className="bg-blue-200 hover:bg-blue-600 hover:text-white p-2 rounded-xl m-2">Add to Cart</button>
        </div>
     </div>
    </div>
  )
}

export default Cosmetics

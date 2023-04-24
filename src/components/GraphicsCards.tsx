import React from 'react'
import { useCounterStore } from '../store/store'

const GraphicsCards = () => {
  const {increment} = useCounterStore()

  return (
    <div>
            <div className="grid grid-cols-4 w-full h-[35rem] gap-3">
      <div className="text-center m-4 h-min rounded-3xl shadow-xl hover:bg-gray-100">
          <img src="https://static-01.daraz.pk/p/b987fccf00f112ecfdea709761b3e5ff.jpg" alt=""/>
          <p className="font-bold">AMD 1080 Ti</p>
          <p>IP68 extreme water and dust resistance, 1000 nits brightness, 1.88 Inch display</p>
         <p className="text-green-800 text-xl m-2 font-bold">90$</p>
          <button onClick={increment} className="bg-blue-200 hover:bg-blue-600 hover:text-white p-2 rounded-xl m-2">Add to Cart</button>
        </div>

        <div className="text-center m-4 h-min rounded-3xl shadow-xl hover:bg-gray-100">
          <img src="https://static-01.daraz.pk/p/c7ae2bf0b3faf1e355e21641788a8aa0.jpg" alt=""/>
          <p className="font-bold">BMP Edition</p>
          <p>512GB storage 16GB ram big battery big display 1 year official warranty by brand</p>
         <p className="text-green-800 text-xl m-2 font-bold">300$</p>
          <button onClick={increment} className="bg-blue-200 hover:bg-blue-600 hover:text-white p-2 rounded-xl m-2">Add to Cart</button>
        </div>

        <div className="text-center m-4 h-min rounded-3xl shadow-xl hover:bg-gray-100">
          <img src="https://static-01.daraz.pk/p/63339026afa1917592dd0a41633bcdb4.jpg_720x720.jpg_.webp" alt=""/>
          <p className="font-bold">W 5100</p>
          <p>512GB storage 6GB ram big battery big display 1 year official warranty by brand</p>
         <p className="text-green-800 text-xl m-2 font-bold">1000$</p>
          <button onClick={increment} className="bg-blue-200 hover:bg-blue-600 hover:text-white p-2 rounded-xl m-2">Add to Cart</button>
        </div>

        <div className="text-center m-4 h-min rounded-3xl shadow-xl hover:bg-gray-100">
          <img src="https://static-01.daraz.pk/p/3aaa114aaca0bdaddae2b0a9ee44216a.jpg_720x720.jpg_.webp" alt=""/>
          <p className="font-bold">2080 Ti</p>
          <p>512GB storage 16GB ram big battery big display 1 year official warranty by brand</p>
         <p className="text-green-800 text-xl m-2 font-bold">670$</p>
          <button onClick={increment} className="bg-blue-200 hover:bg-blue-600 hover:text-white p-2 rounded-xl m-2">Add to Cart</button>
        </div>
     </div>
    </div>
  )
}

export default GraphicsCards

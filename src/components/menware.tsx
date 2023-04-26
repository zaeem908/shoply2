import React from 'react'
import { useCounterStore } from '../store/store'

const Menware = () => {
  const {increment} = useCounterStore()

  return (
    <div className="grid grid-cols-4 w-full h-[35rem] gap-3">

         <div className="text-center m-4 h-min rounded-3xl shadow-xl hover:bg-gray-100">
          <img src="https://static-01.daraz.pk/p/3326009faa3c006dcb7aa929ee810945.jpg_720x720.jpg_.webp" alt=""/>
          <p className="font-bold">HP Shoulder Bag</p>
          <p>premium design, hig quality materials and stiching 1 year official warranty by brand</p>
         <p className="text-green-800 text-xl m-2 font-bold">70$</p>
          <button  onClick={increment}  className="bg-blue-200 hover:bg-blue-600 hover:text-white p-2 rounded-xl m-2">Add to Cart</button>
        </div>

         <div className="text-center m-4 h-min rounded-3xl shadow-xl hover:bg-gray-100">
          <img src="https://static-01.daraz.pk/p/ab51056da45d4e2e9851915f784da4ac.jpg_720x720.jpg_.webp" alt=""/>
          <p className="font-bold">ZARA Shirt</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
         <p className="text-green-800 text-xl m-2 font-bold">30$</p>
          <button  onClick={increment}  className="bg-blue-200 hover:bg-blue-600 hover:text-white p-2 rounded-xl m-2">Add to Cart</button>
        </div>

         <div className="text-center m-4 h-min rounded-3xl shadow-xl hover:bg-gray-100">
          <img src="https://static-01.daraz.pk/p/e9d1c3f51dc316e5e9c0c71b1dc00144.jpg" alt=""/>
          <p className="font-bold">JORDAN jeans</p>
          <p>premium design, hig quality materials and stiching 1 year official warranty by brand</p>
         <p className="text-green-800 text-xl m-2 font-bold">100$</p>
          <button  onClick={increment}  className="bg-blue-200 hover:bg-blue-600 hover:text-white p-2 rounded-xl m-2">Add to Cart</button>
        </div>

         <div className="text-center m-4 h-min rounded-3xl shadow-xl hover:bg-gray-100">
          <img src="https://static-01.daraz.pk/p/762bd0944d575cad428acd43d351cd15.jpg_720x720.jpg_.webp" alt=""/>
          <p className="font-bold">GUCCI coat</p>
          <p>premium design, hig quality materials and stiching 1 year official warranty by brand</p>
         <p className="text-green-800 text-xl m-2 font-bold">50$</p>
          <button onClick={increment} className="bg-blue-200 hover:bg-blue-600 hover:text-white p-2 rounded-xl m-2">Add to Cart</button>

        </div>
    </div>
  )
}

export default Menware

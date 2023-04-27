import { useCounterStore } from '../layouts/store/store'

const Electronics = () => {
  const {increment} = useCounterStore()

  return (
<div className="grid grid-cols-4 w-full h-[35rem] gap-3">
      <div className="text-center m-4 h-min rounded-3xl shadow-xl hover:bg-gray-100">
          <img src="https://cdn.shopify.com/s/files/1/0480/8500/8539/products/B1_800x.png?v=1667918096" alt=""/>
          <p className="font-bold">Watch 8 Ultra</p>
          <p>IP68 extreme water and dust resistance, 1000 nits brightness, 1.88 Inch display</p>
         <p className="text-green-800 text-xl m-2 font-bold">190$</p>
          <button onClick={increment}  className="bg-blue-200 hover:bg-blue-600 hover:text-white p-2 rounded-xl m-2">Add to Cart</button>
        </div>

        <div className="text-center m-4 h-min rounded-3xl shadow-xl hover:bg-gray-100">
          <img src="https://static-01.daraz.pk/p/84877ed0f85e105183a8402fc1d61e4c.jpg_720x720.jpg_.webp" alt=""/>
          <p className="font-bold">Purple Macbook</p>
          <p>512GB storage 16GB ram big battery big display 1 year official warranty by brand</p>
         <p className="text-green-800 text-xl m-2 font-bold">2000$</p>
          <button onClick={increment}  className="bg-blue-200 hover:bg-blue-600 hover:text-white p-2 rounded-xl m-2">Add to Cart</button>
        </div>

        <div className="text-center m-4 h-min rounded-3xl shadow-xl hover:bg-gray-100">
          <img src="https://static-01.daraz.pk/p/14b9451ebbd5311c0cbb93fe9ad8b00d.jpg" alt=""/>
          <p className="font-bold">Redmi Note 11</p>
          <p>512GB storage 6GB ram big battery big display 1 year official warranty by brand</p>
         <p className="text-green-800 text-xl m-2 font-bold">1000$</p>
          <button onClick={increment}  className="bg-blue-200 hover:bg-blue-600 hover:text-white p-2 rounded-xl m-2">Add to Cart</button>
        </div>

        <div className="text-center m-4 h-min rounded-3xl shadow-xl hover:bg-gray-100">
          <img src="https://static-01.daraz.pk/p/6720d4af76d374c21fd8ee4ed512e8f4.jpg_720x720.jpg_.webp" alt=""/>
          <p className="font-bold">Haier Vacumm cleaner</p>
          <p>512GB storage 16GB ram big battery big display 1 year official warranty by brand</p>
         <p className="text-green-800 text-xl m-2 font-bold">670$</p>
          <button onClick={increment}  className="bg-blue-200 hover:bg-blue-600 hover:text-white p-2 rounded-xl m-2">Add to Cart</button>
        </div>
  </div>
  )
}

export default Electronics

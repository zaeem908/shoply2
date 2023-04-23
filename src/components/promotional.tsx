import React from 'react'

const promotional = () => {
  return (
    <div>  
          <h1 className="text-center text-4xl font-bold">Why we choose Shoply?</h1>

    <div className='grid grid-cols-4 gap-20 my-[5rem]'>

      <div  className="text-center m-4 ml-12 h-min w-[12rem] rounded-3xl border-gray-400 border-2 outline outline-gray-400">
        <img src='https://png.pngtree.com/png-clipart/20191120/original/pngtree-shield-icon-png-image_5065644.jpg' alt='img'/>
        <p className="text-center p-2 text-xl font-bold">Secure Payments</p>
        <p className='text-sm'>Fully secure payments and transcacions through protected routes</p>
      </div>
      <div  className="text-center m-4 w-[12rem]  h-min rounded-3xl border-gray-400 border-2 outline outline-gray-400">
        <img src='https://cdn-icons-png.flaticon.com/512/0/614.png' alt='img'/>
        <p className="text-center p-2 text-xl font-bold">Shipping WorldWide</p>
        <p className='text-sm'>Ship over 278 Countries</p>
      </div>
      <div  className="text-center m-4 w-[12rem]  h-min rounded-3xl border-gray-400 border-2 outline outline-gray-400">
        <img src='https://cdn-icons-png.flaticon.com/512/4989/4989753.png' alt='img'/>
        <p className="text-center p-2 text-xl font-bold">Easy Returns</p>
        <p  className='text-sm'>Easiest return policy. 4 Weeks easy returns with no worries</p>
      </div>
      <div  className="text-center m-4 w-[12rem]  h-min rounded-3xl border-gray-400 border-2 outline outline-gray-400">
        <img src='https://cdn-icons-png.flaticon.com/512/1535/1535927.png' alt='img'/>
        <p className="text-center p-2 text-xl font-bold">Low Prices</p>
        <p  className='text-sm'>We prowide Branded products at their lowest possible price tag</p>
      </div>
    </div>
    </div>
  )
}

export default promotional

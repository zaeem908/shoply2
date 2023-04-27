import React from 'react'
import { Link } from 'react-router-dom';
import { useCounterStore } from '../layouts/store/store';


const Header = () => {
  const {count} = useCounterStore()
  return (
    <div>
      <header className="bg-gray-200 py-4">
           <ul className="flex space-x-10 items-center justify-center">
            <Link to={'/'}  className="font-bold text-4xl md:mr-[5rem] lg:mr-[25rem]">SHOPLY</Link>
            <Link to={'/allproducts'} className="bg-gray-300 hover:bg-gray-400 p-2 rounded hover:text-white">All Products</Link>
            <Link to={'/categories'} className="bg-gray-300 hover:bg-gray-400 p-2 rounded hover:text-white">Categories</Link>
            <Link to={'/contact'} className="bg-gray-300 hover:bg-gray-400 p-2 rounded hover:text-white">Contact</Link>
           <div className='fixed'> <Link to={'/cart'} className="inline-block w-[3rem] h-[3rem] hover:bg-gray-400 p-2 rounded hover:text-white"><img alt='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN3wAcYgtK2nz6SBIK0EZUfs9Tv8nv9V5l8g&usqp=CAU'></img></Link>{count}</div>
           </ul>
      </header>
    </div>
  )
}

export default Header

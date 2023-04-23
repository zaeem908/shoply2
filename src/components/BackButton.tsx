import React from 'react'
import { Link } from "react-router-dom";


const BackButton = () => {
  return (
    <div>
           <button  className="w-[5rem] h-[5rem] m-4 outline outline-gray-400 rounded-2xl p-2"> <Link to={'/'}><img src="https://cdn-icons-png.flaticon.com/512/0/340.png" alt="img"></img></Link></button>
    </div>
  )
}

export default BackButton

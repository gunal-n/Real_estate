import React from 'react'
import Navbar from './Navbar'


const Header = () => {
  return (
    <div className='min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden'
    style={{backgroundImage:"url('/header_img.jpg')"}}
    >
        <Navbar/>

    <div className="text-center container mx-auto text-white py-4 px-6 md:px-20 lg:px-32">
       <h2 className='text-5xl sm:text-6xl md:text-[72px] max-w-3xl  inline-block pt-20'>Explore homes that fit your dreams</h2>
       <div className='space-x-6 mt-16'>
        <button className='border px-8 py-3 rounded hover:text-gray-400'><a href='#'>Projects</a></button>
        <button className='border bg-blue-500  px-8 py-3 rounded'><a href='#'> Contact us </a></button>
       </div>
    </div>
    </div>
  )
}

export default Header
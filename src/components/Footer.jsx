import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 border rounded px-6 md:px-20 lg:px-40 py-8 bg-gray-900'>
        
        {/* Logo & Description */}
        <div className='max-w-[350px]'>
            <img src={assets.logo_dark} alt='Logo' className='mb-4'/>
            <p className='text-gray-600 text-sm md:text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Animi officiis modi explicabo mollitia repellat unde ut ullam, 
              rerum, iste sunt repudiandae ipsam adipisci autem dolor 
              officia a odio nostrum ex.
            </p>
        </div>

        {/* Company Links */}
        <div className='py-2 md:px-[100px]'>
            <h2 className='text-white font-bold text-lg mb-3'>Company</h2>
            <ul className='text-gray-600 space-y-2 text-sm md:text-base'>
                <li><a href='#' className='hover:text-white'>Home</a></li>
                <li><a href='#' className='hover:text-white'>About us</a></li>
                <li><a href='#' className='hover:text-white'>Contact us</a></li>
                <li><a href='#' className='hover:text-white'>Privacy policy</a></li>
            </ul>
        </div>

        {/* Newsletter */}
        <div>
            <h2 className='text-white font-bold text-lg mb-2'>Subscribe to our newsletter</h2>
            <p className='text-gray-600 text-sm md:text-base mb-3'>
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <div className='flex flex-col sm:flex-row gap-2'>
              <input 
                type="email" 
                placeholder='Enter your email' 
                className='bg-gray-800 p-2 rounded text-gray-400 border border-gray-700 focus:outline-none w-full sm:w-auto flex-1'
              />
              <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>
                Subscribe
              </button>
            </div>
        </div>
    </div>
  )
}

export default Footer

import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='grid grid-cols-3 border rounded px-8 md:px-20 lg:px-40 py-12 bg-gray-900 '>
        <div className='max-w-[350px]'>
            <img src={assets.logo_dark} alt='Logo'/>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officiis modi explicabo mollitia repellat unde ut ullam, rerum, iste sunt repudiandae ipsam adipisci autem dolor officia a odio nostrum ex.</p>
        </div>
        <div className='py-2 px-[100px]'>
            <h2 className='text-white font-bold text-lg'>Company</h2>
            <ul className='text-gray-600'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About us</a></li>
                <li><a href='#'>Contact us</a></li>
                <li><a href='#'>Privacy policy</a></li>
            </ul>
        </div>
        <div>
            <h2 className='text-white font-bold text-lg'>Subscribe to our newsletter</h2>
            <p className='text-gray-600'>The latest news,articles, and resources, sent to your inbox weekly</p>
            <input type="email" placeholder='Enter your email' className='bg-gray-800 p-2 rounded text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />
            <button className='bg-blue-500 text-white px-4 py-2 mt-2 rounded'>Subscribe</button>
        </div>
    </div>
  )
}

export default Footer
import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  const [showmobilemenu, setShowmobilemenu] = useState(false)
  useEffect(()=>{
    if(showmobilemenu){
      document.body.style.overflow = 'hidden'
    }
    else{
      document.body.style.overflow = 'auto'
    }
    return ()=>{
      document.body.style.overflow = 'auto'
    };
  },[showmobilemenu])
  return (
    <div className="absolute top-0 left-0 z-10 w-full ">
        <div className='container flex items-center justify-between px-6 py-4 mx-auto bg-transparent md:px-20 lg:px-32'>
            <img src={assets.logo} alt=''/>
        
        <ul className='hidden text-white md:flex gap-7'>
            <a href='#home' className='cursor-pointer hover:text-gray-400'>Home</a>
            <a href='#about' className='cursor-pointer hover:text-gray-400'>About</a>
            <a href='#projects' className='cursor-pointer hover:text-gray-400'>Projects</a>
            <a href='#testimonials' className='cursor-pointer hover:text-gray-400'>Testimonials</a>
        </ul>
        <button className='hidden px-8 py-2 bg-white rounded-full md:block'>Sign up</button>
        <img onClick={()=>setShowmobilemenu(true) } src={assets.menu_icon} className='cursor-pointer md:hidden w-7' alt=''/>
        </div>
        {/* Mobile-menu */}
        <div className={`md:hidden ${showmobilemenu ?'fixed w-full':'h-0 w-0'} fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
          <div className='flex justify-end p-6 cursor-pointer'>
            <img onClick={()=>setShowmobilemenu(false)} src={assets.cross_icon} className='w-6' alt=""/>
          </div>
          <ul className='flex flex-col items-center gap-2 px-5 mt-5 text-lg font-medium'>
            <a onClick={()=>setShowmobilemenu(false)} href="#home" className='inline-block px-4 py-2 rounded-full'>Home</a>
            <a onClick={()=>setShowmobilemenu(false)} href="#about" className='inline-block px-4 py-2 rounded-full'>About</a>
            <a onClick={()=>setShowmobilemenu(false)} href="#projects" className='inline-block px-4 py-2 rounded-full'>Projects</a>
            <a onClick={()=>setShowmobilemenu(false)} href="#testimonials" className='inline-block px-4 py-2 rounded-full'>Testimonials</a>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
        <div className='flex flex-col items-center container p-14 overflow-hidden'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-4'>Customer <span className='underline underline-offset-4 decoration-1 font-light'>Testimonials</span></h1>
            <p className='text-gray-500 max-w-80 text-center mb-10'>
            Real Stories from Those Who Found Home with us
            </p>
            <div className='flex flex-wrap justify-center gap-8'>
                {
                    testimonialsData.map((testimonials , index) => (
                        <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                            <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonials.image} alt={testimonials.alt}/>
                            <h2 className='text-xl text-gray-700 font-medium'>{testimonials.name}</h2>
                            <p className='text-gray-500 text-sm mb-4'>{testimonials.title}</p>
                            <div className='flex justify-center gap-1 text-red-500 mb-4'>
                                {/* input number and giving the stare icon in this */}
                                {Array.from({length : testimonials.rating}, (item , index) => (
                                    <img key={index} src={assets.star_icon}  alt='star' className='w-4 h-4' />
                                )) }
                            </div>
                            <p className='text-gray-600'>{testimonials.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}

export default Testimonials
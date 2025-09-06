import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
        <div className='container flex flex-col items-center overflow-hidden p-14'>
            <h1 className='mb-4 text-2xl font-bold sm:text-4xl' id='testimonials'>Customer <span className='font-light underline underline-offset-4 decoration-1'>Testimonials</span></h1>
            <p className='mb-10 text-center text-gray-500 max-w-80'>
            Real Stories from Those Who Found Home with us
            </p>
            <div className='flex flex-wrap justify-center gap-8'>
                {
                    testimonialsData.map((testimonials , index) => (
                        <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                            <img className='w-20 h-20 mx-auto mb-4 rounded-full' src={testimonials.image} alt={testimonials.alt}/>
                            <h2 className='text-xl font-medium text-gray-700'>{testimonials.name}</h2>
                            <p className='mb-4 text-sm text-gray-500'>{testimonials.title}</p>
                            <div className='flex justify-center gap-1 mb-4 text-red-500'>
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
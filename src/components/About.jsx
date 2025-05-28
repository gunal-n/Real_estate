import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div >
        <div className='flex flex-col items-center container p-14 overflow-hidden'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-4'>About <span className='underline underline-offset-4 decoration-1 font-light'>Our Brand</span></h1>
            <p className='text-gray-500 max-w-80 text-center mb-10'>
              Passionate About Properties,Dedicated to Your Vision 
            </p>
            <div className='flex flex-col items-center md:flex-row md:items-start md:gap-20 '> 
                <img src={assets.brand_img} alt="brand image" className='w-full sm:w-1/2 max-w-lg'/>
                <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                    <div >
                        <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28' >
                            <div>
                            <p className='text-5xl font-medium text-gray-800'>10+</p>
                            <p className=''>Years of Excellence</p>
                            </div>
                            <div>
                            <p className='text-5xl font-medium  text-gray-800'>12+</p>
                            <p className=' '>Projects Completed</p>
                            </div>
                            <div>
                            <p className='text-5xl font-medium  text-gray-800'>20+</p>
                            <p className='t'>Mn.Sa.Ft Delivered</p>
                            </div>
                            <div>
                            <p className='text-5xl font-medium  text-gray-800'>25+</p>
                            <p className=''>Ongoing Projects</p>
                            </div>
                            </div>
                            <p className='my-10 max-w-lg'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Totam animi, fugiat vero blanditiis, nisi quod quia veniam 
                                voluptatem quisquam accusamus deleniti laboriosam rem optio culpa 
                                similique modi quam reiciendis recusandae.
                            </p>
                            <button className='bg-blue-600 text-white rounded px-8 py-2'>
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About
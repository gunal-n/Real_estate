import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div >
        <div className='container flex flex-col items-center overflow-hidden p-14'>
            <h1 className='mb-4 text-2xl font-bold sm:text-4xl' id = 'about'>About <span className='font-light underline underline-offset-4 decoration-1'>Our Brand</span></h1>
            <p className='mb-10 text-center text-gray-500 max-w-80'>
              Passionate About Properties,Dedicated to Your Vision 
            </p>
            <div className='flex flex-col items-center md:flex-row md:items-start md:gap-20 '> 
                <img src={assets.brand_img} alt="brand image" className='w-full max-w-lg sm:w-1/2'/>
                <div className='flex flex-col items-center mt-10 text-gray-600 md:items-start'>
                    <div >
                        <div className='grid w-full grid-cols-2 gap-6 md:gap-10 2xl:pr-28' >
                            <div>
                            <p className='text-5xl font-medium text-gray-800'>10+</p>
                            <p className=''>Years of Excellence</p>
                            </div>
                            <div>
                            <p className='text-5xl font-medium text-gray-800'>12+</p>
                            <p className=''>Projects Completed</p>
                            </div>
                            <div>
                            <p className='text-5xl font-medium text-gray-800'>20+</p>
                            <p className='t'>Mn.Sa.Ft Delivered</p>
                            </div>
                            <div>
                            <p className='text-5xl font-medium text-gray-800'>25+</p>
                            <p className=''>Ongoing Projects</p>
                            </div>
                            </div>
                            <p className='max-w-lg my-10'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Totam animi, fugiat vero blanditiis, nisi quod quia veniam 
                                voluptatem quisquam accusamus deleniti laboriosam rem optio culpa 
                                similique modi quam reiciendis recusandae.
                            </p>
                            <button className='px-8 py-2 text-white bg-blue-600 rounded'>
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
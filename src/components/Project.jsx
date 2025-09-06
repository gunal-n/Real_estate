import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from "framer-motion";
// import { motion } from "motion/react"


const Project = () => {
    const [currentIndex , setCurrentIndex] = useState(0);
    const [cardsToShow , setCardsToShow] = useState(1);
    useEffect (() => {
        const updateCardsToShow = () => {
            // to find the number of cards to show based on the window width in js
            if(window.innerWidth >= 1024){
                setCardsToShow(projectsData.length);
            }
            else{
                setCardsToShow(1);
            }
        }
        // call the function to update the cards to show
        updateCardsToShow();
        // add an event listener to the window to update the cards to show when the window is resized
        window.addEventListener('resize', updateCardsToShow);
        return () => {
            // remove the event listener to prevent memory leaks
            window.removeEventListener('resize', updateCardsToShow);
        }
    },[])
    // buttons to navigate through the projects
    const nextProject = () => {
        // % used for circular navigation index number % projectsData.length
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    };
    const prevProject = () => {
        // left arror
        setCurrentIndex((prevIndex) => 
          prevIndex === 0 ? projectsData - 1 : prevIndex - 1
        );
    }


  return (
    <motion.div
    initial={{ opacity: 0,x:-200 }}
      transition={{duration:1}}
      whileInView={{ opacity: 1 ,x:0}}
      viewport={{once:true}}
    
    className="container w-full px-6 py-4 pt-20 mx-auto my-20 overflow-hidden md:px-20 lg:px-32" id='projects'>
          <h1 className='mb-4 text-2xl font-bold text-center sm:text-4xl'>Projects<span className='font-light underline underline-offset-4 decoration-1'>Completed</span></h1>
            <p className='mx-auto mb-10 text-center text-gray-500 max-w-80'>
              Crafting Spaces, Building Legeacies-Explore Our Portfolio 
            </p>

            {/* Slider-butten */}
             <div className='flex items-center justify-end mb-8'>
                 <button onClick={prevProject} className='p-3 mr-2 bg-gray-200 rounded' aria-label='Previous Project'>
                    <img src={assets.left_arrow} alt='left'/>
                </button>
                 <button onClick={nextProject} className='p-3 mr-2 bg-gray-200 rounded' aria-label='Next Project'>
                    <img src={assets.right_arrow} alt='left'/>
                </button>
             </div>

             {/* Project slider container */}
             <div className='overflow-hidden'>
               <div className='flex gap-8 transition-transform duration-500 ease-in-out' 
               style = 
               {{
                transform:`translateX(-${(currentIndex* 100) / cardsToShow}%)`
                }}>
                        {
                            // Project cards .js
                              projectsData.map((project, index) => (
                                // to give key to change the values of index
                                <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                                               <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
                                 <div className='absolute left-0 right-0 flex justify-center bottom-2'>
                                     <div className='inline-block w-3/4 px-4 py-2 bg-white shadow-md'>
                                            <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                                            <p className='text-sm text-gray-500'>{project.price}<span className='px-1'>|</span>{project.location}</p>
                                        </div>
                                    </div>
                                </div>
                              )) 
                        }
                </div>
             </div>
    </motion.div>
  )
}

export default Project
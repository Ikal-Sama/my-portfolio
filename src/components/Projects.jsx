import React from 'react'
import catCafe from '../assets/Cat-Cafe.png'
import reactAgency from '../assets/React-Agency.png'

const Projects = () => {
  return (
    <div className='w-full text-white p-5' id='projects'>
        <h1 className='text-2xl text-sky-300 font-bold'>PROJECTS</h1>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 p-4 gap-5'>
            <div className='flex flex-col w-full shadow-md p-4 my-4 rounded-lg shadow-gray-500 hover:scale-105 duration-200'>
                <a href="https://ikal-sama.github.io/catcafe.github.io/"><img src={catCafe} alt="" className='rounded-md' /></a>
                <h2 className='text-center text-2xl p-2 md:text-xl font-bold'>Cat-Cafe Landing Page</h2>
            </div>

            <div className='flex flex-col w-full shadow-md p-4 my-4 rounded-lg shadow-gray-500 bg-white hover:scale-105 duration-200'>
            <a href="https://ikal-sama.github.io/react-agency/"><img src={reactAgency} alt="" className='rounded-md' /></a>
                <h2 className='text-center text-2xl p-2 md:text-xl text-black font-bold'>Digital-Agency</h2>
            </div>

        </div>
    </div>
  )
}

export default Projects
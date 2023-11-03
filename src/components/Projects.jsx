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
                <p className='text-sm text-gray-300'>The Cat Cafe Landing Page project aims to create an engaging and informative web page for a fictional cat cafe. This landing page will serve as the online presence for the cafe, providing potential customers with essential information about the cafe's offerings, such as its mission, menu, reservations, and contact details.</p>
                <p className='text-l font-bold'>Technology Use:</p><span>Html, Css, JavaScript</span>
            </div>

            <div className='flex flex-col w-full shadow-md p-4 my-4 rounded-lg shadow-gray-500 bg-white hover:scale-105 duration-200'>
            <a href="https://ikal-sama.github.io/react-agency/"><img src={reactAgency} alt="" className='rounded-md' /></a>
                <h2 className='text-center text-2xl p-2 md:text-xl text-black font-bold'>Digital-Agency</h2>
                <p className='text-sm text-black'>A digital financing website is an online platform designed to facilitate financial transactions, investments, and lending activities in a digital, paperless, and convenient manner. These websites are built to cater to a wide range of financial needs, from personal finance management to business funding and investment opportunities.</p>
                <p className='text-l font-bold text-black'>Technology Use:</p>
                <span className='text-black'>ReactJS, TailwindCss</span>
            </div> 

        </div>
    </div>
  )
}

export default Projects
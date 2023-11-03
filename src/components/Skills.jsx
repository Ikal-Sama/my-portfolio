import React from 'react'
import Css from '../assets/css-3.png'
import Html from '../assets/html.png'
import Javascript from '../assets/js.png'
import iconReact from '../assets/react.svg'
import Express from '../assets/express.png'
import Tailwind from '../assets/tailwind.png'

const Skills = () => {
  return (
    <div className='w-full py-10 bg-white' id='skills'>
        <h1 className='text-center font-bold text-3xl text-sky-300 mb-[10%]'>SKILLS</h1>
        <div className='max-w-[1240px]  mx-auto grid md:grid-cols-3 gap-5'>
            <div className='w-full shadow-xl flex flex-col p-4 my-8  rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Css} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>CSS</h2>
                
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Javascript} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>JavaScript</h2>
                
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Html} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>HTML</h2>
                
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={iconReact} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>ReactJS</h2>
               
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Express} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>ExpressJs</h2>
                
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Tailwind} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>TailwindCss</h2>
               
            </div>

        </div>
    </div>
  )
}

export default Skills
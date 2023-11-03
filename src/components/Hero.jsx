import React from 'react'
import MyImage from '../assets/my-image.png'


const Hero = () => {
  return (
    <div className='text-white w-full py-16 px-4'id='home'>
        <div className=' max-w-[1240px]  mx-auto grid md:grid-cols-2 mt-5'>
            <img src={MyImage} alt="" className='w-[400px] mx-auto my-4 rounded-lg shadow-lg shadow-gray-600'/>
            <div className='flex flex-col justify-center ms-5'>
                <h1 className='mt-5 text-2xl text-sky-300 md:text-4xl sm:text-3xl font-bold'>DANIEL JHON B. BANCALE</h1>
                <h2 className='text-xl mt-2 text-gray-300'>FRONT END WEB DEVELOPER</h2>
                <p className='my-3'>A BSIT Graduate and a front-end developer
                , I am a dedicated and enthusiastic individual looking to kickstart my career in the field of information technology. With a strong academic background in various IT areas, including MS Office and Computer Servicing, I am eager to contribute to an IT team and grow professionally. Throughout my academic journey, honing my communication and problem-solving skills. I am a quick learner. Seeking an entry-level IT position, I am excited to apply my theoretical knowledge and contribute to the success of an innovative organization.</p>
               <a href='../assets/DanielJhonBancale-Resume-2023.docx' download>
                 <button className='w-[200px] bg-sky-300 py-3 text-black font-medium rounded-md hover:bg-white hover:text-sky-300'>Download my CV</button>
               </a>
            </div>
        </div>
    </div>
  )
}

export default Hero
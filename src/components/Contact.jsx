import React from 'react'
import {AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGoogle,
  AiOutlineInstagram
} from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='bg-white w-full p-10' id='contact'>
        <div className='max-w-[1240px] sm:flex  gap-4 mx-auto  justify-between'>
            <div>
              <h1 className='uppercase py-8 text-2xl md:text-4xl'>Contact Me</h1>
              <p>Message me on how you feel about my porfolio and feel free to critisize, i am also accepting projects.</p>
              <p className='text-xl mb-5 mt-2'>You can also contact me here..</p>
              <div className='grid grid-cols-4 gap-10 text-sky-500 mx-auto'>
                <AiOutlineFacebook size={30}  className='bg-white shadow-md '/>
                <AiOutlineLinkedin size={30} className='bg-white shadow-md '/>
                <AiOutlineGoogle size={30} className='bg-white shadow-md '/>
                <AiOutlineInstagram size={30}  className='bg-white shadow-md '/>
              </div>
            </div>
            <form action="https://getform.io/f/22da7cd3-2acb-46eb-a522-696e13ac6f8a" method='POST'
            className='shadow-xl w-full sm:w-[650px] p-2 rounded-md my-5'>
               <div className='grid'>
               <input type="text" name="name" placeholder='Input Your Name' className='p-2 mb-2 border rounded-md'/>
                <input type="text" name="email" placeholder='Input Your Email' className='p-2 mb-2 border rounded-md'/>
               <textarea name="message" placeholder='Enter your Message' cols="30" rows="10" className='w-full border p-2'></textarea>
               </div>
               <button className='bg-sky-300 p-3 rounded-md font-medium mt-5 hover:bg-black hover:text-sky-300'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
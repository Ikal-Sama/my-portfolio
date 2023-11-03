import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='text-white w-full p-4 px-10 flex justify-between items-center fixed bg-black'>
        <h1 className='text-sky-300 font-bold text-2xl'>DANIEL.</h1>
        <div className='md:flex hidden'>
            <ul className='flex gap-10 '>
            <li className='p-4 text-l  cursor-pointer hover:text-sky-300'><Link to='home' spy={true} 
                smooth={true} 
                duration={500} >About</Link></li>
                <li className='p-4 text-l  cursor-pointer hover:text-sky-300'><Link to='skills' spy={true} 
                smooth={true} 
                duration={500} >Skills</Link></li>
                <li className='p-4 text-l  cursor-pointer hover:text-sky-300'><Link to='projects' spy={true} 
                smooth={true} 
                duration={500} >Projects</Link></li>
                <li className='p-4 text-l  cursor-pointer hover:text-sky-300'><Link to='contact' spy={true} 
                smooth={true} 
                duration={500} >Contact</Link></li>
            </ul>
        </div>
        <div onClick={handleNav}  className='block md:hidden cursor-pointer'>
            {nav ?  <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
        </div>
        <div className={nav ? ' fixed left-0 top-0 w-[60%] rounded-tr-lg rounded-br-lg border-r h-full border-r-gray-200 bg-black text-white ease-in-out duration-500': 'fixed left-[-100%] ease-in-out duration-300'}>
            <h1 className='text-sky-300 font-bold text-2xl w-full m-4'>DANIEL.</h1>
            <ul className='p-4 uppercase'>
                <li className='p-4 text-l border-b cursor-pointer hover:bg-sky-300 hover:border-none'><Link to='home' spy={true} 
                smooth={true} 
                duration={500} >About</Link></li>
                <li className='p-4 text-l border-b cursor-pointer hover:bg-sky-300 hover:border-none'><Link to='skills' spy={true} 
                smooth={true} 
                duration={500} >Skills</Link></li>
                <li className='p-4 text-l border-b cursor-pointer hover:bg-sky-300 hover:border-none'><Link to='projects' spy={true} 
                smooth={true} 
                duration={500} >Projects</Link></li>
                <li className='p-4 text-l border-b cursor-pointer hover:bg-sky-300 hover:border-none'><Link to='contact' spy={true} 
                smooth={true} 
                duration={500} >Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
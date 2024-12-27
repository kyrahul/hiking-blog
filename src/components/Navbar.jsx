import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { Navlinks } from './Navlinks'
import { useState } from 'react';
import Logo from '../Assets/imgs/logo.png'
export const Navbar = () => {
  const [openMenu ,setOpenMenu] = useState(false)
  return (
    <nav className='flex justify-between'>
      <div className=' flex items-center gap-0 m-0'>
        <img className='  h-9 cursor-pointer ' src={Logo} alt="logo" />
     {/* <span className='font-semibold text-4xl text-sky-400'>Hiking</span> */}
      </div> 
      <ul className='md:flex hidden items-center gap-10 mr-2'>
      <Navlinks/>
      </ul>

      <ul className ={` fixed  top-0  z-50 w-2/3 h-screen bg-white shadow-2xl md:hidden flex flex-col gap-10 pt-20 p-7 duration-500  ${openMenu? "left-0" : "left-[-100%]"}`}>
      <Navlinks/>
      </ul>
      <div className='text-3xl md:hidden z-50 flex items-center' onClick={ ()=>setOpenMenu(!openMenu)}>
      <IoIosMenu />
      </div>
    </nav>
  )
}

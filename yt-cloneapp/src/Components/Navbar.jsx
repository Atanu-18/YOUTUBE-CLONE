import React from 'react'
import { HiOutlineMenu } from "react-icons/hi";
import logo from "../../public/logo.jpg";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import plogo from "../../public/plogo.jpg";

function Navbar() {
  return (
    <div className='flex justify-between px-6 py-2'>
        <div className='flex gap-4 items-center cursor-pointer'>
          <HiOutlineMenu className='text-2xl'/> 
          <img src={logo} alt="" className='w-28'/> 
        </div>

        <div className='flex w-[32%] '>
            <div className='w-[100%] rounded-l-full border px-4 py-2'>
                <input type="text" placeholder='search...' className='outline-none '/>
            </div>
            <button className='px-4 py-2 bg-gray-100 border rounded-r-full'>
                <CiSearch className='text-xl'/>
            </button>
            <IoMdMic size={"35px"} className='ml-4 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200'/>

        </div>

        <div className='flex gap-4 items-center cursor-pointer'>
            <RiVideoAddLine className='text-2xl'/>
            <AiOutlineBell className='text-2xl'/>
            <img src={plogo} className='w-10 border rounded-full border-e-blue-400'/>

        </div>
    </div>
  )
}

export default Navbar
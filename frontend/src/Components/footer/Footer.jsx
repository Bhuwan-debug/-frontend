import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";
   const menulinks =[
    {
        id:1,
        name:"Home",
        link:"/#",
    },
    {
        id:2, 
        name:"Shop",
        link:"/shop",
    },
    {
        id:3,
        name:"About",
        link:"/about",
    },
    {
        id:4,
        name:"Blogs",
        link:"/blogs"
    },

    ];
const Footer = () => {
  return (
    <div className='py-7'>
        {/* main div for */}
        <div className='px-[3rem] sm:px-[3rem] grid grid-cols-4'>
            
            
            <div className='flex flex-col'>
             <a className='uppercase text-red-500 font-bold text-5xl' href="">E-Shop</a>
             <div className='opacity-50'>
              <p>Develop by mr Khatri. </p>
              <p>Made with 💔 by Bhuwan Khatri</p>
              <p>Vist Our Youtube Channel</p>
             </div>
            </div>
            
            
            
            <div className='flex flex-col'>
                 <p className='text-2xl font-bold font-serif'>Important Links</p>
                <div>
{menulinks.map((i)=>(
<li key={i.id} className='px-4 text-gray-500 hover:text-black hover:font-bold duration
-200 cursor-pointer'>{i.name}</li>

      ))}
                </div>
      
            </div>
            
            
            
            <div className='flex flex-col font-serif'>
             <p className='text-2xl font-bold font-serif'>Quick Links</p>
             <ul>
                {menulinks.map((i)=>(
                    <ul className='px-4 text-gray-500 hover:text-black hover:font-bold duration-200 cursor-pointer'>
            {i.name}
                    </ul>

                ))}
             </ul>
            </div>
            


            <div className='flex flex-col '>
              <p className='text-2xl font-bold font-serif'>Address</p>
              <div className='font-semibold gap-4 items-center '>
             <p className='flex gap-3 items-center'><FaLocationArrow />Kathmandu,Nepal</p>
             <p className='flex gap-3 items-center'><MdPhoneIphone /> 9742992404,9800569649</p>
              </div>
              <div className='flex gap-4 text-2xl items-center mt-6'>
               <a href=""><FaFacebookF /></a>
               <a href=""><IoLogoInstagram /></a>
               <a href=""><IoLogoTiktok /></a>
              </div>
            </div>
            
            
             </div>
    </div>
  )
}

export default Footer
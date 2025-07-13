import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { BiSolidWalletAlt } from "react-icons/bi";
import { FcOnlineSupport } from "react-icons/fc";

const servicedata=[
    {
        id:1,
         icon:<MdLocalShipping className='text-4xl md:text-5xl text-red-400' />,
        title:"free delivery",
        description:"Free delivery all over nepal",
    },
    {
        id:2,
         icon:<FaCheckCircle className='text-5xl text-red-400' />,
        title:"Safe money",
        description:"Free delivery all over nepal",
    },
    

    {
        id:3,
         icon:<BiSolidWalletAlt className='text-5xl text-red-400'/>,
        title:"free delivery",
        description:"Free delivery all over nepal",
    },
    {
        id:4,
         icon:<FcOnlineSupport className='text-5xl text-red-400' />,
        title:"Online support24/7",
        description:"Free delivery all over nepal",
    },
]
const Services = () => {

  return (
    <div className='px-[1rem] sm:px-[3rem] my-14 sm:my-20 gap-4'>
       <div className='grid grid-cols-2 sm:grid-cols-4'>
       {servicedata.map((i)=>(
        <div className='flex flex-col items-start sm:flex-row'>
            {i.icon}
            <div>
            <h1 className='text-lg font-bold'>{i.title}</h1>
            <p className='text-sm'>{i.description}</p>
            </div>
        </div>
       ))}
       </div>
        </div>
  )
}

export default Services
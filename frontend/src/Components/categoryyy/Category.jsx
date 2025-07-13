import React from 'react'
import Button from '../shared/Button'
 import img1 from "../../assets/categoryimgg/headphone.png"
 import img2 from "../../assets/categoryimgg/earphone.png"
 import img3 from "../../assets/categoryimgg/gaming.png"

const Category = () => {
  return (
    <div className='py-8'>
    <div className='px-[1rem] sm:px-[3rem]'>
         
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4' >
            
            {/* /first div */}
           <div className='h-[320px] bg-gray-800 bg-gradient-to-b rounded-3xl pl-7  relative'>
            
            <div className='mt-16 text-xl'>
                <p className='mb-[2px] text-gray-300 '>Enjoy</p>
            <p className='text-2xl font-semibold mb-[3px]'>With</p>
            <p className='text-4xl font-bold opacity-20 mb-3'>Headphone</p>
            <Button text="Buy now " className="bg-red-400"/>
            </div>
                    <img src={img1} alt="" className='h-[200px] w-[200px] absolute -right-3 bottom-16' />
             </div>

           {/* second */}
            <div className='h-[320px] bg-yellow-800 bg-gradient-to-b rounded-3xl pl-7  relative'>
            <div className='mt-16 text-xl'>
                <p className='mb-[2px] text-gray-300 '>Enjoy</p>
            <p className='text-2xl font-semibold mb-[3px]'>With</p>
            <p className='text-4xl font-bold opacity-20 mb-3'>Earphone</p>
            <Button text="Buy now " className="bg-red-400"/>
            </div>
                    <img src={img2} alt="" className='h-[200px] w-[200px] absolute -right-3 bottom-16' />
             </div>

          
             

      
              <div className='h-[320px] bg-blue-800 bg-gradient-to-b rounded-3xl pl-7 col-span-2 relative'>
            <div className='mt-16 text-xl '>
                <p className='mb-[2px] text-gray-300 '>Enjoy</p>
            <p className='text-2xl font-semibold mb-[3px]'>With</p>
            <p className='text-4xl font-bold opacity-20 mb-3'>Playstation
            </p>
            <Button text="Buy now " className="bg-red-400"/>
            </div>
                    <img src={img3} alt="" className='h-[200px] w-[200px] absolute -right-3 bottom-16' />
             </div>

          
          </div>



         </div>
         </div>
  )
}

export default Category
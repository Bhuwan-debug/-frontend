import React from 'react'
import image1 from "../../assets/blogs/blog-1.jpg"
import image2 from "../../assets/blogs/blog-2.jpg"
import image3 from "../../assets/blogs/blog-3.jpg"
const Blogdata =[
    {
        title:"How to chose smartwatch",
        subtitle:"Make sure watch works with your phone ,choose Battery life at least 2-3 days",
        publisher:"Jan 20 2025 by Bhuwan Khatriee",
        image:image1
    },
    {
        title:"How to chose smartwatch",
        subtitle:"Make sure watch works with your phone ,choose Battery life at least 2-3 days",
        publisher:"Jan 20 2025 by Bhuwan Khatriee",
        image:image2,
    },
    {
        title:"How to chose smartwatch",
        subtitle:"Make sure watch works with your phone ,choose Battery life at least 2-3 days",
        publisher:"Jan 20 2025 by Bhuwan Khatriee",
        image:image3,
    },
]
const Blog = () => {
  return (
    <div className='p-[3rem]'>
    
     {/* title */}
     <div className='flex flex-col text-center mb-5'>
        <h1 className='text-3xl font-bold'>Recent News</h1>
        <p className='text-mg text-gray-400'>Explore Our Blogs</p>
     </div>


           {/* body section */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {Blogdata.map((i) =>(
            <div key={i.title}>
                
               {/*  image */}
               <div className='overflow-hidden rounded-2xl mb-2'>
              <img src={i.image} alt="" className='w-full h-[202px] object-cover rounded-2xl
               hover:scale-105 duration-200' />
               </div>

           {/* body section */}
            <div className='space-x-2 '>
            <p className='text-xs text-gray-400 '>{i.publisher}</p>
            <p className='font-bold line-clamp-1'>{i.title}</p>
            <p className='text-sm line-clamp-2 text-gray-600'>{i.subtitle}</p>
            </div>






            </div>
          ))}
          </div>





    </div>
  )
}

export default Blog
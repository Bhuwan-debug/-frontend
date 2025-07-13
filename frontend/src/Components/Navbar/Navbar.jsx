import { IoIosArrowDown } from "react-icons/io";
import { FcSearch } from "react-icons/fc";
import { TbShoppingCartHeart } from "react-icons/tb";
import { useState } from "react";
import {FaBars,FaOpencart, FaTimes} from "react-icons/fa"
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
    const DropdownLinks =[

        {
            id:1,
            name:"Trending products",
            link:"/trending-products"
        },
        {
            id:2,
            name:"Best Selling",
            link:"/best-selling",
        }, 
        {
            id:3,
            name:"Top rated",
           links:"/top-rated",
        },
    ];
const Navbar = () => {
     const [slidebaropen,setSlidebaropen] =useState(false)
  
   
  return (
    <div className="flex justify-between items-center px-4">
        
    {/* left side */}
        <div className="p-[1rem] sm:px-[3rem] flex items-center  ">
            <a className='text-red-600 text-2xl sm:text-3xl uppercase font-semibold' href="#">E-SHOp</a> 
            <div>
              <ul className=" hidden sm:flex items-center  gap-7">
              {menulinks.map((i)=>(
                <li className="px-4 font-semibold text-gray-600 hover:text-black duration-200">
                    <a href={i.link}>{i.name}</a>
                    </li>
              ))}
              <li className="group">
                <a href="" className="flex items-center font-semibold text-gray-700 hover:text-">
                    Quick link
                    <IoIosArrowDown className="group-hover:rotate-180 duration-200" />
                </a>
                </li>
                </ul>
                <div/>
                <div className="hidden group-hover:block bg-white w-[200px] absolute shadow-md p-2 rounded-md">
                    {DropdownLinks.map((i)=>(
                        <ul>
                            <li>
                                <a className="text-gray-500 hover:text-black duration-200 p-2 
                                hover:bg-red-500/20 inline-block w-full 
                                rounded-md" href={i.link}>{i.name}</a>
                            </li>
                        </ul>
                    ))}
                </div>
          
        </div>
    </div>
     
    {/* right side */}
    <div className="flex items-center">
    <div className=" flex relative group">
       <input className="w-0 group-hover:w-[300px] group-hover:border
        group-hover:border-gray-500 duration-300 rounded-full px-3" 
        type="text " placeholder="Search anything here" />

         <FcSearch className="group-hover:text-red-500 text-xl text-gray-400 absolute 
         top-3.5  -translate-y-1/2 right-3 duration-200"/>
    </div>
     {/* card */}
    <div className="relative p-3 ">
        <TbShoppingCartHeart />
        <p className="w-4 h-4 absolute top-0 right-0 bg-red-500 text-white rounded-full flex 
        items-center justify-center text-xs">4</p>
        </div>
        {/* mobile size btn */}
        <div className="block lg:hidden"> 
            <button onClick={()=>setSlidebaropen(true)}  >
        <FaBars  className="text-2xl text-gray-700"/>
            </button>
        </div>
        
    </div>
    {/* mobile slidebar */}
        <div className={` fixed top-0 left-0 h-full w-54 bg-white shadow
         transform transition-transform duration-300 z-50  ${slidebaropen? "translate-x-0":"-translate-x-full" }  `}>

            <button onClick={()=> setSlidebaropen(false)} >
                <FaTimes className="text-xl" />
                    </button>
           

       <ul className="p-4 space-y-3">
       { menulinks.map((i)=>(
        <li key={i.id}>
        <a href={i.link} className="block text-gray-500 hover:text-red-500">
       {i.name}
        </a>
        </li>
       ))}
       {/* divider title */}
       <h1 className="mt-4 font-semibold text-gray-400"> Quick links</h1>
       {DropdownLinks.map((i)=>(
        <li key={i.id}>
         <a href={i.link}>
            {i.name}
         </a>
        </li>
       ))}
    
       </ul>

        </div>

    </div>

  )
}

export default Navbar 
import React from 'react'
import img1 from '../../assets/productimg/p-1.jpg'
import img2 from '../../assets/productimg/p-2.jpg'
import img3 from '../../assets/productimg/p-3.jpg'
import img4 from '../../assets/productimg/p-4.jpg'
import img5 from '../../assets/productimg/p-5.jpg'
import img6 from '../../assets/productimg/p-7.jpg'
import img7 from '../../assets/productimg/p-9.jpg'
import Productcard from './Productcard'
const Productdata=[
    {
        id:1,
        image:img1,
        title:"Boat Headphone",
        price:"120",

    },
    {
        id:2,
        image:img2,
        title:"Smartwatch",
        price:"100",

    },
    {
        id:3,
        image:img3,
        title:"Boat Headphone",
        price:"120",

    },
    {
        id:4,
        image:img4,
        title:"Boat Headphone",
        price:"120",

    },
]
const Productdata2=[
    {
        id:1,
        image:img5,
        title:"Boat Headphone",
        price:"120",

    },
    {
        id:2,
        image:img6,
        title:"Boat Headphone",
        price:"120",

    },
    {
        id:3,
        image:img7,
        title:"Boat Headphone",
        price:"120",

    },
    {
        id:4,
        image:img4,
        title:"Boat Headphone",
        price:"120",

    },
]

const Product = () => {
  return (
    <div>
        {/* title */}
        <div className='flex flex-col text-center mb-5'>
            <h1 className='text-3xl font-bold '> Our Products </h1>
            <p className='text-md text-gray-400'> Explore Our Products</p>
        </div>
         {/* card */}
         <div>
        <Productcard  hie={Productdata}/>
        <Productcard  hie={Productdata2}/>
         </div>

    </div>
  )
}

export default Product
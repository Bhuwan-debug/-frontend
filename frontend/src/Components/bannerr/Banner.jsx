import Button from "../shared/Button";



const Banner = ({nia}) => {
  
  return (
    <div className="px-[3rem] my-12">
        <div className={`${nia.className} grid grid-cols-1 sm:grid-cols-3  items-center rounded-3xl gap-6 text-white `}>
        
        
        {/* first content */}
           <div className="p-8">
            <p className="text-sm"> {nia.discount}</p>
            <h1 className="uppercase text-4xl lg:text-7xl font-bold"> {nia.title2}</h1>
            <p className="text-sm">{nia.date}</p>
           </div>

           {/* second content */}
           <div>
            <img src={nia.image}
             alt="Banner img"
             className=" w-[250px] md:w-[350px]
              drop-shadow-2xl object-contain " />
           </div>

           {/* third content */}
           <div>
            <p className="font-bold text-xl ">{nia.title2}</p>
            <p className="text-3xl sm:text-5xl font-semibold"> {nia.title3}</p>
            <p className="text-sm">{nia.title4}</p>
            <div>
              
              <Button text="Shop Now" className={`${nia.className} bg-white `} />
            </div>
           </div>
           
        </div>

    </div>
  )
}

export default Banner
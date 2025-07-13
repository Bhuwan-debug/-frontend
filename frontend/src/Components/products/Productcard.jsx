
import Button from '../shared/Button'

const Productcard = ({hie}) => {
  return (
    
    <div className='px-[3rem] py-12'>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-5 items-center mx-auto'>
        {Array.isArray(hie) && hie.map((i)=>(

<div className='relative group'>
          {/*  imagesection */}
          <div>
            <img src={i.image} alt=""className='h-[180px] w-[260px] object-cover rounded-md' /> 
            
            <div className='absolute top-30 translate-x-1/3 hidden 
            group-hover:flex duration-200 justify-center'>
                <Button  text="Buy Now " className="bg-red-300" /></div>
          </div>

            {/* description section */}
               <div>
                <h2 className='font-semibold'>{i.title}</h2>
                <h2 className='font_bold'>${i.price}</h2>
               </div>
               </div>
               ))}
        </div>
    </div>
  )
}

export default Productcard
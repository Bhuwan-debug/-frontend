
import image1 from"../../assets/heroimage/headphone.png"
import image2 from"../../assets/heroimage/macbook.png"
import image3 from"../../assets/heroimage/vr.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from "../shared/Button";

const HeroData=[
  {
    id:1,
    img:image1,
    subtitle:"Beats Solo",
    title:"Wireless",
    title2:"Headphone",
    discription:"His life will be Change dolar sit amet,consectur",
  },
  {
    id:2,
    img:image2,
    subtitle:"Macbook Air",
    title:"Performance fast",
    title2:"IOS MacBook",
    description:"His life will be Change dolar sit amet,cosectur",
  },
  {
    id:3,
    img:image3,
    subtitle:"for smartphones",
    title:"Wireless",
    title2:"VR",
    description:"your life will be amazing",
  }
]
const Hero = () => {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="p-[1rem] sm:px-[3rem]" >
      <div className="bg-red-500 h-[500px] rounded-3xl flex justify-center items-center">
        <div className="container px-[1rem] sm:px-[3rem]">
         <Slider {...settings}>
        {HeroData.map((i)=>(
<div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 ">
        {/* content */}
      <div className="flex justify-center flex-col gap-4 sm:pl-3 pt-12 sm:pt-0 ">
        
        <h1 className="text-2xl sm:text-6xl font-bold ">{i.subtitle}</h1>
        <h1 className="text-6xl sm:text-3xl font-bold">{i.title}</h1>
        <h1 className="text-5xl text-white uppercase sm:text-[80px] md:text-[100px] xl:text-[100px] font-bold whitespace-nowrap " >{i.title2}</h1>
          <div>
            <Button text="buy now " className="bg-blue-500" />
          </div>
      </div>
    
        {/* image */}
        <div> 
          <img src={i.img} alt="" 
           className="w-[300px] h-[300px] sm:h-[450px] sm:scale-x-105 lg:scale-110 object-contain mx-auto drop-shadow-2xl"/>
        </div>
        </div>  
       </div>

 ))}
</Slider>
      </div>
      </div>

    </div>
  )
}

export default Hero
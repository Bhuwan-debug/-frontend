import headphone from"./assets/categoryimgg/headphone.png"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Category from "./Components/categoryyy/Category"
import Category2 from "./Components/categoryyy/Category2"
import Services from "./Components/services/Services"
import Banner from "./Components/bannerr/Banner"
import Product from "./Components/products/Product"
import Productcard from "./Components/products/Productcard"
import Blog from "./Components/BLOG/Blog"
import Partners from "./Components/Partners/Partners"
import Footer from "./Components/footer/Footer"

const Bannerdata ={
  discount :'30%off',
  title :"Fine Smile",
  date:"10 Jan to 28 Jan",
  image:headphone,
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  title4:"Circuit boards,soldaring,using a multiplayer or oscilloscope",
  className:'bg-red-500 text-black',
}
const Bannerdat={
  discount :'30%off',
  title :"Fine Smile",
  date:"10 Jan to 28 Jan",
  image:headphone,
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  title4:"Circuit boards,soldaring,using a multiplayer or oscilloscope",
  className:'bg-green-500 text-red-500',
}
function App(){
  return(
    
    <>
    <Navbar/>
    <Hero/>
    <Category/>
    <Category2/>
    <Services/>
    <Banner nia={Bannerdata} />
    <Product />
    <Productcard/>
 <Banner nia={Bannerdat } /> 
 <Blog />
 <Partners/>
 <Footer/>
    </>
  )

}
export default App
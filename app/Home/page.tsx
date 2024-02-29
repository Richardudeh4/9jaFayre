import Favourite from "./components/Favourite";
import HomeHero from "./components/HomeHero";
import HomeMain from "./components/HomeMain";
import Market from "./components/Market";
import Listing from "./components/Listing";
import Events from "./components/Events";
import Subscribe from "./components/Subscribe"; 
import  {Testimonial} from "./components/Testimonial";

const HomePage = () => {
  return (
    <div className='overflow-hidden'>
      <div className='bg-white'>
      <HomeHero/>
      <HomeMain/>
      <Market/>
      <Testimonial/>
      <Favourite/>
      <Listing/>
      <Events/>
      <Subscribe/>
        </div>
    </div>
  )
}

export default HomePage
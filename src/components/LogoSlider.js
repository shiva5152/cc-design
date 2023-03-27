import { Navigation, Pagination, A11y,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useWindowSize } from 'react-use';
import logos from '../utils/logos'
import SingleLogo from './SingleLogo';

const LogoSlider = ({bgcolor,color}) => {
  
  const { width } = useWindowSize();
  return (
    <div className="logos" style={{backgroundColor:`${bgcolor}`}} >
      <h1 style={{color:`${color}`}}> Clients</h1>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={width>700?3:2}
      navigation
      loop
      autoplay
      pagination={{ clickable: true }}
     
    >
     {logos.map((obj,index)=>{

return (
    <SwiperSlide key={index} >
 <SingleLogo src={obj.src}/>
 </SwiperSlide>
)
})}
      
    </Swiper>
      
      
     
      
    
    </div>
  )
}

export default LogoSlider



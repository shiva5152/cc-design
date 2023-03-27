import { Navigation, Pagination, A11y,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import imgData from '../utils/imgData';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



 const Carousel= () => {
  return (
    <Swiper
      
      modules={[Navigation, Pagination, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop
      autoplay
      pagination={{ clickable: true }}
      
    >
     {imgData.map((obj,index)=>{
      return (
        <SwiperSlide key={index} ><img src={obj.src} alt="" /></SwiperSlide>
      )
     })}
     
      
    </Swiper>
  );
};
export default Carousel;
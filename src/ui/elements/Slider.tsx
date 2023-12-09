import Card from "./Card";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

const Slider = () => {
  return (
    <Swiper
      scrollbar={{
        hide: true,
      }}
      slidesPerView={"auto"}
      spaceBetween={10}
      loop={true}
      modules={[Scrollbar]}
      className="mySwiper"
    >
      <SwiperSlide className="w-96 h-60 flex self-center">
        <Card />
      </SwiperSlide>
      <SwiperSlide className="w-96 h-60 flex self-center">
        <Card />
      </SwiperSlide>
      <SwiperSlide className="w-96 h-60 flex self-center">
        <Card />
      </SwiperSlide>
      <SwiperSlide className="w-96 h-60 flex self-center">
        <Card />
      </SwiperSlide>
      <SwiperSlide className="w-96 h-60 flex self-center">
        <Card />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;

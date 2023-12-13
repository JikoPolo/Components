import React from "react";
import Card from "../Card";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

interface SliderProps {
  settings?: any;
}

const CardCarousel: React.FC<SliderProps> = ({ settings = {} }) => {
  return (
    <Swiper
      scrollbar={settings.scrollbar}
      breakpoints={settings.breakpoints}
      centeredSlides={settings.centeredSlides}
      coverflowEffect={settings.coverflowEffect}
      effect={settings.effect}
      grabCursor={settings.grabCursor}
      navigation={settings.navigation}
      slidesPerView={settings.slidesPerView}
      spaceBetween={settings.spaceBetween}
      loop={settings.loop}
      modules={[Scrollbar, Navigation, EffectCoverflow]}
      className="cardCarousel w-full h-full"
    >
      <SwiperSlide className="text-center flex justify-center items-center">
        <Card width="100%" />
      </SwiperSlide>
      <SwiperSlide className="text-center flex justify-center items-center">
        <Card width="100%" />
      </SwiperSlide>
      <SwiperSlide className="text-center flex justify-center items-center">
        <Card width="100%" />
      </SwiperSlide>
      <SwiperSlide className="text-center flex justify-center items-center">
        <Card width="100%" />
      </SwiperSlide>
      <SwiperSlide className="text-center flex justify-center items-center">
        <Card width="100%" />
      </SwiperSlide>
      <SwiperSlide className="text-center flex justify-center items-center">
        <Card width="100%" />
      </SwiperSlide>
      <SwiperSlide className="text-center flex justify-center items-center">
        <Card width="100%" />
      </SwiperSlide>
    </Swiper>
  );
};

export default CardCarousel;

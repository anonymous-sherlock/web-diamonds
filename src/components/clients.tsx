"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';


function ClientsLogo() {
  return (
    <div className="mt-[100px] px-10 max-w-[1140px] mx-auto">
      <div className=" border-t border-common-white py-16    flex justify-between items-center gap-10">
        <div className="w-[25%] shrink-0">
          <h4 className="text-base uppercase text-common-black font-medium">Clients I&apos;ve Worked With</h4>
        </div>
        <div className="w-[75%]">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
          autoplay={{
            delay: 0.5,
            disableOnInteraction: false,
          }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ClientsLogo;

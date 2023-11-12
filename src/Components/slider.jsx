import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard } from 'swiper/modules';
import slider1Image from '../assets/images/slider/1.png'
import slider2Image from '../assets/images/slider/2.png'
import slider3Image from '../assets/images/slider/3.jpg'
import slider4Image from '../assets/images/slider/4.jpg'


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Mobile() {
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time) => {
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        keyboard={{
            enabled: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation, Keyboard]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper flex justify-center"
      >
        <SwiperSlide>
            <figure>
                <img className="rounded-xl" src={slider1Image} alt="" />
            </figure>
        </SwiperSlide>
        <SwiperSlide>
            <figure>
                <img className="rounded-xl" src={slider2Image} alt="" />
            </figure>
        </SwiperSlide>
        <SwiperSlide>
            <figure>
                <img className="rounded-xl" src={slider3Image} alt="" />
            </figure>
        </SwiperSlide>
        <SwiperSlide>
            <figure>
                <img className="rounded-xl" src={slider4Image} alt="" />
            </figure>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <span ref={progressContent} style={{display:'none'}}></span>
        </div>
      </Swiper>
    </div>
  );
}

function Big() {
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time) => {
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="container">
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        loop={true}
        pagination={{
          clickable: true,
        }}
        keyboard={{
            enabled: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation, Keyboard]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper flex justify-center"
      >
        <SwiperSlide>
            <figure>
                <img className="rounded-xl w-[650px]" src={slider1Image} alt="" />
            </figure>
        </SwiperSlide>
        <SwiperSlide>
            <figure>
                <img className="rounded-xl w-[650px]" src={slider2Image} alt="" />
            </figure>
        </SwiperSlide>
        <SwiperSlide>
            <figure>
                <img className="rounded-xl w-[650px]" src={slider3Image} alt="" />
            </figure>
        </SwiperSlide>
        <SwiperSlide>
            <figure>
                <img className="rounded-xl w-[650px]" src={slider4Image} alt="" />
            </figure>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <span ref={progressContent} style={{display:'none'}}></span>
        </div>
      </Swiper>
    </div>
  );
}

export default function slider() {
  return (
    <>
      <section className="flex justify-center items-center md:hidden mt-10 mx-5 relative">
        <Mobile />
      </section>
      <section className="hidden md:flex justify-center items-center mt-10 relative">
        <Big />
      </section>
    </>
  );
}

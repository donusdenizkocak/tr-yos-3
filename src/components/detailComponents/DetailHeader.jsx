import { initLightboxJS } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox } from "lightbox.js-react";
import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";
const DetailHeader = () => {
  useEffect(() => {
    initLightboxJS("Insert your License Key here", "Insert plan type here");
  }, []);
  return (
    <div className="bg-black">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          padding: "7rem",
        }}
        effect={"coverflow"}
        spaceBetween={10}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,          
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="efect">
          <SlideshowLightbox>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SlideshowLightbox>
        </SwiperSlide>
        <SwiperSlide className="efect">
          <SlideshowLightbox>
            <img className="" src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SlideshowLightbox>
        </SwiperSlide >
        <SwiperSlide className="efect">
          <SlideshowLightbox>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SlideshowLightbox>
        </SwiperSlide  >
        <SwiperSlide className="efect">
          <SlideshowLightbox>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SlideshowLightbox>
        </SwiperSlide>
        <SwiperSlide className="efect">
          <SlideshowLightbox>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SlideshowLightbox>
        </SwiperSlide>
        <SwiperSlide className="efect" >
          <SlideshowLightbox>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SlideshowLightbox>
        </SwiperSlide>
        <SwiperSlide className="efect">
          <SlideshowLightbox>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SlideshowLightbox>
        </SwiperSlide>
        <SwiperSlide className="efect">
          <SlideshowLightbox>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SlideshowLightbox>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DetailHeader;

{
  /* <img
  className="w-full rounded"
  src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
/>
<img
  className="w-full rounded"
  src="https://source.unsplash.com/AYS2sSAMyhc/1400x1200"
/>
<img
  className="w-full rounded"
  src="https://source.unsplash.com/Kk8mEQAoIpI/1600x1200"
/>
<img
  className="w-full rounded"
  src="https://source.unsplash.com/HF3X2TWv1-w/1600x1200"
/> */
}

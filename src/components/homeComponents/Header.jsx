import MultiInput from "./MultiInput";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const Header2 = () => {
  return (
    <>
      <Swiper
        effect={"fade"}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{ width: "100%", height: "100vh", position: "relative" }}
      >
        <SwiperSlide
          style={{
            textAlign: "center",
            fontSize: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "url(https://www.tr-yös.com/test/6984215678913/slider/1683716962252.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: "center",
            fontSize: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "url(https://iatkv.tmgrup.com.tr/c4c003/616/321/0/0/800/416?u=https%3A%2F%2Fitkv.tmgrup.com.tr%2F2020%2F08%2F07%2Fmaas-gibi-burs-destegi-1596775964948.jpeg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: "center",
            fontSize: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "url(https://sks.uskudar.edu.tr/uploads/images/61bde2316beecogrenci-kulupleri-faydalari-uskudar-universitesi.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
      </Swiper>
      <MultiInput />
    </>
  );
};

export default Header2;

import MultiInput from "./MultiInput";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Header2 = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}        
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
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
              "url(https://www.tr-yös.com/test/6984215678913/slider/1683716962252.jpg)",
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

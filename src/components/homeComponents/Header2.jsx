import MultiInput from "./MultiInput";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Header2 = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
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
            opacity: ".8",
            background:
              "url(https://sks.uskudar.edu.tr/uploads/images/61bdd39a0fda6ogrenci-kuluplerine-katilmak.jpg)",
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
            opacity: ".8",
            background:
              "url(https://sks.uskudar.edu.tr/uploads/images/61bdd39a0fda6ogrenci-kuluplerine-katilmak.jpg)",
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
            opacity: ".8",
            background:
              "url(https://sks.uskudar.edu.tr/uploads/images/61bdd39a0fda6ogrenci-kuluplerine-katilmak.jpg)",
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

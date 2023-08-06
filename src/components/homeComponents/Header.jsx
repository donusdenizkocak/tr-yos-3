import MultiInput from "./MultiInput";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const Header = ({ slider }) => {
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
        {slider?.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              textAlign: "center",
              fontSize: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: `url(${item.image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></SwiperSlide>
        ))}
      </Swiper>
      <MultiInput />
    </>
  );
};

export default Header;

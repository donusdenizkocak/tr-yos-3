import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const dataImages = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
  "https://swiperjs.com/demos/images/nature-6.jpg",
  "https://swiperjs.com/demos/images/nature-7.jpg",
  "https://swiperjs.com/demos/images/nature-8.jpg",
];

const DetailHeader = ({ universityImage, departments }) => { 

  if (!departments) {
    return null;  }

  return (
    <div className="bg-gradient-black-white">
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        style={{
          padding: "6rem 0 2rem 0  ",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height:"50vh"
        }}
        modules={[Autoplay, Pagination]}
      >
        {universityImage.map((item, index) => (
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height:"50vh"
            }}
          >
            <div
              key={index}
              style={{
                width: "100%",
                height: "50vh",
                backgroundImage: `url(${item})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center center",
              }}
            ></div>
          </SwiperSlide>
        ))}
        {universityImage.length== 0 &&dataImages.map((item,index)=>(
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              key={index}
              style={{
                width: "100%",
                height: "50vh",
                backgroundImage: `url(${item})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center center",
              }}
            ></div>
          </SwiperSlide>

        )) }
      </Swiper>
    </div>
  );
};

export default DetailHeader;

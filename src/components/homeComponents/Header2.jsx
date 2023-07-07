import Select from "react-select";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Cities = [
  { value: 1, label: "Adana" },
  { value: 2, label: "Adiyaman" },
  { value: 3, label: "Afyonkarahisar" },
  { value: 4, label: "Agri" },
  { value: 5, label: "Aksaray" },
];
const Universities = [
  { value: 1, label: "Abdullah Gül Üniversitesi" },
  { value: 2, label: "Acıbadem Mehmet Ali Aydınlar Üniversitesi" },
  { value: 3, label: "Adana Alparslan Türkeş Bilim Ve Teknoloji Üniversites" },
  { value: 4, label: "Adıyaman Üniversites" },
  { value: 5, label: "Afyonkarahisar Sağlık Bilimleri Üniversitesi" },
];
const Departmants = [
  { value: 1, label: "Chemistry" },
  { value: 2, label: "Computer Science" },
  { value: 3, label: "Engineering" },
  { value: 4, label: "Mathematics" },
  { value: 5, label: "Psychology" },
];

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

        <div
          className="absolute  z-50"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="flex justify-center items-center">
            <h1>Education</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-4">
            <div>
              <Select
                options={Cities}
                closeMenuOnSelect={false}
                isMulti
                placeholder="Select City "
              />
            </div>

            <div>
              <Select
                options={Universities}
                closeMenuOnSelect={false}
                isMulti
                placeholder="Select University "
              />
            </div>

            <div>
              <Select
                options={Departmants}
                closeMenuOnSelect={false}
                isMulti
                placeholder="Select Departmant"
              />
            </div>
            <button class="bg-blue-500  hover:bg-blue-700 text-white font-bold py-1.5 px-4 border border-blue-700 rounded h-9">
              Select
            </button>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default Header2;

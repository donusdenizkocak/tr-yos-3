import { Swiper, SwiperSlide } from "swiper/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeContext } from "../../context/HomeContext";
import { Icon } from "../../helper/Icons";
import { AuthContext } from "../../context/AuthContext";
import { toastWarnNotify } from "../../helper/ToastNotify";
import axios from "axios";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const API_KEY =
  "M5IJfY8iFQ/OpURXwOpQVTzUq8affdseVfOthIPmI4s6fxBUPqNYQ4g7UvukkqAf9WcQtdaBdYqtgpXNe5ce37d90ccf67cb521e26eb392c23f5";

const CardHome = ({ city, faculty, university, department, code, id }) => {
  const [cardImages, setCardImages] = useState([]);
  const navigate = useNavigate();
  console.log(cardImages);

  const { addLikes, removeLikes, like, userID, compare, handleCompare } =
    useContext(HomeContext);
  const { currentUser } = useContext(AuthContext);

  const departmentName = university?.tr;

  const handleDetailClick = () => {
    if (currentUser) {
      navigate(`/detail/${id}`);
    } else {
      toastWarnNotify("Lütfen Giriş Yapınız");
    }
  };

  const handleLikeClick = (id) => {
    if (currentUser) {
      if (!like.includes(id)) {
        addLikes(id, userID);
      } else {
        removeLikes(id, userID);
      }
    } else {
      toastWarnNotify("Lütfen Giriş Yapınız");
    }
  };

  const getImg = async (cardId) => {
    try {
      const { data } = await axios(
        `https://tr-yös.com/api/v1/record/departmentimage.php?id=${cardId}&token=${API_KEY}`
      );
      setCardImages(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getImg(id);
  }, []);

  return (
    <div
      className=" bg-white border border-gray-200 rounded-lg shadow w-[310px] h-[415px] flex flex-col justify-between"
      key={code}
    >
      <div className="relative">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {cardImages?.image?.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url(${item})`,
                height: "215px",
                with: "100%",
                borderRadius: "8px 8px 0 0 ",
              }}
            ></SwiperSlide>
          ))}
        </Swiper>

        {cardImages.length === 0 && (
          <img
            className="rounded-t-lg w-full h-[215px] object-fill  "
            src="https://iatkv.tmgrup.com.tr/c4c003/616/321/0/0/800/416?u=https%3A%2F%2Fitkv.tmgrup.com.tr%2F2020%2F08%2F07%2Fmaas-gibi-burs-destegi-1596775964948.jpeg"
            alt="image"
          />
        )}

        <button
          className={`absolute bottom-2 right-2 flex gap-1 z-10  p-1 rounded-lg border font-semibold  ${
            compare?.includes(id) ? "activeCompare" : "bg-gray-200"
          }`}
          onClick={() => handleCompare(id)}
        >
          <span className="pt-1">
            <Icon name="compare" size="1rem" />
          </span>
          <span>Compare</span>
        </button>
      </div>
      <div className="flex flex-row h-[150px] text-[14px] p-3  gap-2">
        <div className=" flex flex-col flex-1 justify-center items-center gap-3  ">
          <p className="text-[#022f5d] font-semibold hover:text-[#017efa]">
            {department?.tr}
          </p>

          <p className="text-[#022f5d] font-semibold hover:text-[#017efa]">
            {faculty.tr}
          </p>

          <p className="text-gray-400 text-[12px]">{departmentName}</p>
        </div>

        <div
          id={id}
          className={`cursor-pointer }`}
          onClick={() => handleLikeClick(id)}
        >
          {like.includes(id) ? (
            <Icon name="fav" size="20" fill="red" />
          ) : (
            <Icon name="fav" size="20" fill="blue" />
          )}
        </div>
      </div>

      <div className="flex justify-between items-center  border-t-[1px] ">
        {city?.tr ? (
          <div className="flex text-[12px] text-[#4F5E64] gap-2 mx-5 my-2">
            <Icon name="city" size="15" />
            <p className="">{city?.tr}</p>
          </div>
        ) : (
          <div className="w-[1rem] "></div>
        )}

        <div
          className="text-md font-bold h-[2rem] my-1 flex justify-center items-center"
          onClick={handleDetailClick}
        >
          <button className="mx-5 h-full px-3 bg-[#3B82F6] text-white rounded-lg">
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardHome;

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeContext } from "../../context/HomeContext";
import { Icon } from "../../helper/Icons";
import { AuthContext } from "../../context/AuthContext";

const CardHome = ({
  city,
  bolum,
  faculty,
  university,
  universities,
  universityImage,
  department,
  images,
  code,
  id,
}) => {
  const [iconColor, setIconColor] = useState("#017EFA");
  const navigate = useNavigate();

  const { addLikes, removeLikes, like, postCompare, compare, deleteCompare } =
    useContext(HomeContext);
  const { currentUser } = useContext(AuthContext);

  const departmentName = university?.tr;

  const departmentImage =
    universityImage &&
    Object.entries(universityImage).find(
      ([universityName, imageUrl]) =>
        universityName.trim().toLowerCase() ===
        departmentName?.trim().toLowerCase()
    )?.[1];

  const [iconSelected, setIconSelected] = useState(false);

  const handleDetailClick = () => {
    navigate(`/detail/${id}`);
  };

  const handleCompare = (id) => {
    if (currentUser) {
      console.log(compare.includes(id));
      if (compare.includes(id)) {
        postCompare(id);
      } else {
        deleteCompare(id);
      }
    } else {
      alert("LÜTFEN GİRİŞ YAPINIZ");
    }
  };
  // console.log(like.includes(id))
  // const handleLikeClick = (id) => {
  //   if (iconColor === "#017EFA") {
  //     if (like.includes(id)) {
  //       addLikes(id,currentUser);
  //       setIconColor("bebe");
  //     } else {
  //       removeLikes(id,currentUser);
  //       console.log("delete kısmı ");
  //       setIconColor("#017EFA");
  //     }
  //   } else {
  //     alert("LÜTFEN GİRİŞ YAPINIZ");
  //   }

  // };
  const handleLikeClick = (id) => {
    if (iconColor === "#017EFA") {
      // Card is not in favorites, add it to favorites
      addLikes(id, currentUser);
      setIconColor("red");
    } else {
      // Card is already in favorites, remove it from favorites
      removeLikes(id, currentUser);
      setIconColor("#017EFA");
    }
  };

  return (
    <div
      className=" bg-white border border-gray-200 rounded-lg shadow w-[310px] h-[415px] flex flex-col justify-between"
      key={code}
    >
      <div className="relative">
        <img
          className="rounded-t-lg w-full h-[215px] object-fill hover:scale-90 hover:ease-in-out hover:duration-300 "
          src={
            departmentImage ||
            "https://iatkv.tmgrup.com.tr/c4c003/616/321/0/0/800/416?u=https%3A%2F%2Fitkv.tmgrup.com.tr%2F2020%2F08%2F07%2Fmaas-gibi-burs-destegi-1596775964948.jpeg"
          }
          alt="image"
        />

        <button
          className={`absolute bottom-2 right-2 flex gap-1 z-10  p-1 rounded-lg border font-semibold  ${
            compare?.includes(id) ? "activeCompare" : "bg-gray-200"
          }` }
          onClick={()=>handleCompare(id)}>

           
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

        <div className={`cursor-pointer  `} onClick={() => handleLikeClick(id)}>
          <Icon name="fav" size="20" fill={`${iconColor}`} />
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
          <button className="mx-5 h-full px-3 bg-[#00000080] text-white rounded-lg">
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardHome;

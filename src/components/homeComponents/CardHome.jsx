import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HomeContext } from "../../context/HomeContext";

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
  id
}) => {
  console.log(universityImage);
  console.log(id)
  const navigate=useNavigate()

  const {setSelectedItems,selectedItems} =useContext(HomeContext)

  const departmentName = university?.tr;
  console.log(departmentName);
  const departmentImage = Object.entries(universityImage).find(
    ([universityName, imageUrl]) =>
      universityName.trim().toLowerCase() ===
      departmentName?.trim().toLowerCase()
  )?.[1];
  const handleDetailClick = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <div
      className=" bg-white border border-gray-200 rounded-lg shadow w-[310px] h-[415px] flex flex-col justify-between"
      key={code}
    >
      <div className="relative">
        <img

          className="rounded-t-lg w-full h-[215px] object-fill hover:scale-90 hover:ease-in-out hover:duration-300 "
          src={departmentImage}
          alt="image"
        />
        <button className="absolute bottom-2 right-2 flex gap-1 z-10  p-1 rounded-lg border font-semibold bg-green-200" onClick={(e)=> setSelectedItems([...selectedItems, {id,data,logo,images,tr}])}>
          <span className="pt-1">
            <svg
              fill="#000000"
              height="1rem"
              width="1rem"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 51.4 51.4"
              xmlSpace="preserve"
              stroke="#000000"
              strokeWidth="0.7196"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path d="M1.7,25.2c0.553,0,1-0.447,1-1c0-6.065,4.935-11,11-11h24v8.964L51.4,12.2L37.7,2.236V11.2h-24c-7.168,0-13,5.832-13,13 C0.7,24.753,1.147,25.2,1.7,25.2z" />
                  <path d="M49.7,26.2c-0.553,0-1,0.447-1,1c0,6.065-4.935,11-11,11h-24v-8.964L0,39.2l13.7,9.964V40.2h24c7.168,0,13-5.832,13-13 C50.7,26.647,50.253,26.2,49.7,26.2z" />
                </g>
              </g>
            </svg>
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

        <div className="">
          <svg
            className="rounded-full "
            aria-hidden="true"
            fill="#017EFA"
            viewBox="0 0 576 512"
            width="20"
            height="20"
            style={{ outline: "1px solid #c0c0c0", outlineOffset: "5px" }}
          >
            <path d="M256 368C256 403.7 266.6 436.9 284.9 464.6L279.4 470.3C266.4 483.2 245.5 483.2 233.5 470.3L39.71 270.5C-16.22 212.5-13.23 116.6 49.7 62.68C103.6 15.73 186.5 24.72 236.5 75.67L256.4 96.64L275.4 75.67C325.4 24.72 407.3 15.73 463.2 62.68C506.1 100.1 520.7 157.6 507 208.7C484.3 198 458.8 192 432 192C334.8 192 256 270.8 256 368zM576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM476.7 324.7L416 385.4L387.3 356.7C381.1 350.4 370.9 350.4 364.7 356.7C358.4 362.9 358.4 373.1 364.7 379.3L404.7 419.3C410.9 425.6 421.1 425.6 427.3 419.3L499.3 347.3C505.6 341.1 505.6 330.9 499.3 324.7C493.1 318.4 482.9 318.4 476.7 324.7H476.7z" />
          </svg>
        </div>
      </div>
      {/* <hr /> */}
      <div className="flex justify-between items-center  border-t-[1px] ">
        <div className="flex text-[12px] text-[#4F5E64] gap-2 mx-5 my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="currentColor"
            className="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          <p className="">{city?.tr}</p>
        </div>
        <div className="text-md font-bold h-[2rem] my-1 flex justify-center items-center" onClick={handleDetailClick}>
          <button className="mx-5 h-full px-3 bg-[#00000080] text-white rounded-lg">
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardHome;

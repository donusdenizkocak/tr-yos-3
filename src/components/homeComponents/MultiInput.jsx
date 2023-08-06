import Select from "react-select";
import { HomeContext } from "../../context/HomeContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const MultiInput = () => {
  const navigate = useNavigate();
  const {
    city,    
    handleFirstInputChange,
    handleSecondInputChange,
    handleThirdInputChange,
    filteredUniList,
    filteredAllUniList,
  } = useContext(HomeContext);
  return (
    <div
      className="flex flex-col gap-10 absolute z-50"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="flex justify-center items-center font-extrabold text-6xl text-white">
        <h1>Education</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 p-5 rounded-lg  bg-[#ffffff49]">
        <div className="lg:w-[13rem] ">
          <Select
            options={city}
            closeMenuOnSelect={false}
            isMulti
            placeholder="Select City "
            onChange={handleFirstInputChange}
          />
        </div>

        <div className="lg:w-[13rem]">
          <Select
            options={filteredUniList}
            closeMenuOnSelect={false}
            isMulti
            placeholder="Select University "
            onChange={handleSecondInputChange}
          />
        </div>

        <div className="lg:w-[13rem]">
          <Select
            options={filteredAllUniList}
            closeMenuOnSelect={false}
            isMulti
            placeholder="Select Departmant"
            onChange={handleThirdInputChange}
          />
        </div>
        <button
          className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-1.5 px-4 border border-blue-700 rounded h-9  w-full lg:w-[10rem] "
          onClick={() => navigate("/departments")}
        >
          Submit Search
        </button>
      </div>
    </div>
  );
};

export default MultiInput;

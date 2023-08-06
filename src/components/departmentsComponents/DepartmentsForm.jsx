import Select from "react-select";
import { HomeContext } from "../../context/HomeContext";
import { useContext } from "react";

const DepartmentsForm = () => {
  const {   
    city,
    selectedCities,
    selectedUnies,   
    selectedDeps,   
    handleFirstInputChange,
    handleSecondInputChange,
    handleThirdInputChange,
    filteredUniList,
    filteredAllUniList,
  } = useContext(HomeContext);



  return (
    <div
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      style={{ maxWidth: "450px", minWidth: "265px" }}
    >
      <form className="w-full h-full">
        <div className="grid grid-row gap-4  w-full">
          <div>
            <Select
              options={city}
              closeMenuOnSelect={false}
              isMulti
              placeholder="Select City "
              isClearable
              onChange={handleFirstInputChange}
              value={selectedCities}
            />
          </div>

          <div>
            <Select
              options={filteredUniList}
              closeMenuOnSelect={false}
              isMulti
              placeholder="Select University "
              onChange={handleSecondInputChange}
              value={selectedUnies}
            />
          </div>

          <div>
            <Select
              options={filteredAllUniList}
              closeMenuOnSelect={false}
              isMulti
              placeholder="Select Departmant"
              value={selectedDeps}
              onChange={handleThirdInputChange}
            />
          </div>
        </div>
        <div className="flex w-full mt-3 gap-1">
          <div className="relative my-3 w-full" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer  rounded border border-gray-300 bg-transparent  py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0  w-full "
              placeholder="Default input"
            />
            <label
              htmlFor="exampleFormControlInpu3"
              className="pointer-events-none absolute left-3 top-0   origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.3rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
            >
              Min Price
            </label>
          </div>
          <div className="relative my-3 w-full" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer rounded border  border-gray-300 bg-transparent  py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 w-full "
              placeholder="Default input"
            />
            <label
              htmlFor="exampleFormControlInpu3"
              className="pointer-events-none absolute left-3  origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.3rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
            >
              Max Price
            </label>
          </div>
        </div>
        
        <div className=" flex justify-center items-center">
          <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-1.5 px-4 border border-blue-700 rounded h-9 w-full mt-5">
            Submit Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default DepartmentsForm;

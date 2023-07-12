import Select from "react-select";
import { HomeContext } from "../../context/HomeContext";
import {useContext, useState}  from  'react'




const MultiInput = () => {

  const{cities,universities,departments}=useContext(HomeContext);
   const [selectedIds, setSelectedIds] = useState([]);

  const uniList=universities.map((uni)=>{
    return{...universities,value:uni.city,label:uni.tr}
  })
  const handleFirstInputChange = (selectedOptions) => {
    const selectedIds = selectedOptions.map((option) => option.value);
    setSelectedIds(selectedIds);
  };
  const filteredUniList = selectedIds.length > 0
  ? uniList.filter((item) => selectedIds.includes(item.value))
  : uniList;


  
  console.log(selectedIds)
  console.log(filteredUniList)
 
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
            options= {cities.map((city)=>({value:city.id,label:city.tr}))}
            // closeMenuOnSelect={false}
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
          />
        </div>

        <div className="lg:w-[13rem]">
          <Select
           options={departments.map((dep) => ({ value: dep.id, label: dep.tr}))}
            closeMenuOnSelect={false}
            isMulti
            placeholder="Select Departmant"
          />
        </div>
        <button class="bg-[#0475e5]  hover:bg-[#C5BEB5] text-white font-bold w-[15rem] lg:w-[10rem] py-1.5 px-4 border border-blue-700 rounded h-9">
          Select
        </button>
      </div>
    </div>
  );
};

export default MultiInput;

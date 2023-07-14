import Select from "react-select";
import { HomeContext } from "../../context/HomeContext";
import { useContext, useState } from "react";

const MultiInput = () => {
  const { cities, universities,allDepartments} = useContext(HomeContext);
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedSecondIds, setSelectedSecondIds] = useState([]);

  const handleFirstInputChange = (selectedOptions) => {
    const selectedIds = selectedOptions.map((option) => option.value);
    setSelectedIds(selectedIds);
  }
     const handleSecondInputChange = (selectedOptions2) => {
      const selectedSecondIds= selectedOptions2.map((option) => option.label);
      console.log(selectedOptions2)
      setSelectedSecondIds(selectedSecondIds);
      
    };


  console.log(selectedIds);
  console.log(selectedSecondIds);
  console.log(allDepartments);

const filteredUniList=selectedIds.length ? 
 universities?.filter((item) => selectedIds.includes(item.city)).map((item)=>({...item,
  value:item.code,
  label:item.tr
})) : 
universities?.map((item) => ({
  ...item,
  value: item.code,
  label: item.tr,
}));

const filteredAllUniList =selectedSecondIds.length ? 
 allDepartments?.filter((item) => selectedSecondIds.includes(item.university.tr)).map((item)=>({...item,label:item.department.tr,value:item.department.code})):

allDepartments.map((item)=>({...item,label:item.department.tr,value:item.department.code}))


 console.log(filteredUniList);
 console.log(filteredAllUniList);
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
            options={cities.map((city) => ({ value: city.id, label: city.tr }))}
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
          />
        </div>
        <button class="bg-[#0475e5]  hover:bg-[#C5BEB5] text-white font-bold w-[20rem] lg:w-[10rem] py-1.5 px-4 border border-blue-700 rounded h-9">
          Select
        </button>
      </div>
    </div>
  );
};

export default MultiInput;

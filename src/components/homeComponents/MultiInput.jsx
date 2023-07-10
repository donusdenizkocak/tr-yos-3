import Select from "react-select";
import { HomeContext } from "../../context/HomeContext";
import {useContext}  from  'react'



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

const MultiInput = () => {

  const{cities,setCities}=useContext(HomeContext);
  const cityList=cities.map((city)=>{
    return{value:city.id,label:city.tr}
  })



  
  
 
    
  
  console.log(cities)
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
            options={cityList}
            closeMenuOnSelect={false}
            isMulti
            placeholder="Select City "
          />
        </div>

        <div className="lg:w-[13rem]">
          <Select
            options={Universities}
            closeMenuOnSelect={false}
            isMulti
            placeholder="Select University "
          />
        </div>

        <div className="lg:w-[13rem]">
          <Select
            options={Departmants}
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

import React from 'react'
import Select from "react-select";
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

  const options = [
    { id: 'checkbox1', label: 'Checkbox 1' },
    { id: 'checkbox2', label: 'Checkbox 2' },
    { id: 'checkbox3', label: 'Checkbox 3' },
    { id: 'checkbox4', label: 'Checkbox 4' },
    { id: 'checkbox5', label: 'Checkbox 5' },
    { id: 'checkbox6', label: 'Checkbox 6' },
    { id: 'checkbox6', label: 'Checkbox 7' },
    { id: 'checkbox6', label: 'Checkbox 8' },
  ];

  const Checkbox = ({ id, label }) => (
    <div className="checkbox-container">
      <label className="left">
        <input
          className="checkbox-input mx-1"
          type="checkbox"
          defaultValue
          id={id}
        />
        {label}
      </label>
    </div>
  );

const DepartmentsForm = () => {
 

  
    
    
   
    
  
    
      return (
       
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div >
        <div className="grid grid-row gap-4  w-full">
           <div >
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
 
    
        </div>
        <div className='flex'>

        <div className="relative my-3 " data-te-input-wrapper-init>
        <input type="text" className="peer  min-h-[auto]  rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" placeholder="Default input" />
        <label htmlFor="exampleFormControlInpu3" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Min Price
        </label>
      </div>
        <div className="relative my-3" data-te-input-wrapper-init>
        <input type="text" className="peer  min-h-[auto] rounded border  border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" placeholder="Default input" />
        <label htmlFor="exampleFormControlInpu3" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Max Price
        </label>
      </div>
     
        </div>

        <div >
        <h3 className="text-gray-900 font-semibold">Advanture Feautures</h3>
        <div className="grid grid-cols-2 gap-2 mt-4 justify-center text-gray-600">
      {options.map((option) => (
        <Checkbox key={option.id} id={option.id} label={option.label} />
      ))}
    </div>

        </div>
        <div className=" flex justify-center items-center">
        <button class="bg-blue-500  hover:bg-blue-700 text-white font-bold py-1.5 px-4 border border-blue-700 rounded h-9 w-full mt-5">
  Submit Search
</button>
        </div>


        </div>

  
         

       
        </form>
    
    
       
          
   
      )
    }
    

  


export default DepartmentsForm

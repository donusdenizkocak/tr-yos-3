import React from 'react';
import Select from "react-select";


const Cities = [
  { value: 1, label: "Adana" },
  { value: 2, label: "Adiyaman" },
  { value: 3, label: "Afyonkarahisar" },
  { value: 4, label: "Agri" },
  { value: 5, label: "Aksaray" },
];

const Header = () => {

  return (
    
    <div className="mx-auto container py-8">
       <Select 
        options={Cities} 
        closeMenuOnSelect={false}
        isMulti
        placeholder="Select City "
       />
    </div>
  )
}

export default Header
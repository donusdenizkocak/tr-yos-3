import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const HomeContext = createContext();

const API_KEY =
  "M5IJfY8iFQ/OpURXwOpQVTzUq8affdseVfOthIPmI4s6fxBUPqNYQ4g7UvukkqAf9WcQtdaBdYqtgpXNe5ce37d90ccf67cb521e26eb392c23f5";

const FEATURED_API = `https://tr-yös.com/api/v1/location/allcities.php?token=${API_KEY}`;
const CITIES_API = `https://tr-yös.com/api/v1/location/allcities.php?token=${API_KEY}`;
const UNIVERSITIES_API = `https://tr-yös.com/api/v1/education/alluniversities.php?token=${API_KEY}`;
const DEPARTMENTS_API = `https://tr-yös.com/api/v1/education/alldepartmentsname.php?token=${API_KEY}`;
const ALLDEPARTMENTS_API = `https://tr-yös.com/api/v1/record/alldepartments.php?token=${API_KEY}`;
const COMPARE_API =`https://tr-yös.com/api/v1/users/addcompare.php?`


const HomeContextProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [allDepartments, setAllDepartments] = useState([])
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedUnies, setSelectedUnies] = useState([]);
  const [selectedSecondIds, setSelectedSecondIds] = useState([]);
  const [selectedThirdIds, setSelectedThirdIds] = useState([]);
  const [selectedDeps,   setSelectedDeps] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [userID, setUserID] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );
    const [compare, setCompare] = useState([])
    const [deleteCompare, setDeleteCompare] = useState([])
    const [active, setActive] = useState([])
    const navigate =useNavigate()
    
  

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect((id,userID) => {
    getCities();
    getUniversities();
    getDepartments();
    getAllDepartments();
    if(userID){
      getCompare(id)
    }
  }, []);

 const handleCompare  =(id) =>{
  if(!compare.includes(id)){
    setCompare((item) => [...item,id])
    // console.log(compare)
  }else{
    postCompare(id)
    // console.log(compare)
  }
 }

  const getCities = async () => {
    try {
      const { data } = await axios.get(CITIES_API);
      // console.log(data);
      setCities(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUniversities = async () => {
    try {
      const { data } = await axios.get(UNIVERSITIES_API);
        // console.log(data);
       
      setUniversities(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDepartments = async () => {
    try {
      const { data } = await axios.get(DEPARTMENTS_API);
      // console.log(data);
      setDepartments(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllDepartments = async () => {
    try {
      const { data } = await axios.get(ALLDEPARTMENTS_API);
      // console.log(data);
      const shuffledData = shuffleArray(data);
      setAllDepartments(shuffledData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFirstInputChange = (selectedOptions) => {
    // console.log(selectedOptions)
    const selectedIds = selectedOptions.map((option) => option.value);
    // const selectedCities=selectedOptions.map((option) => option.label)
    setSelectedCities(selectedOptions)
    setSelectedIds(selectedIds);
    
    // console.log(selectedIds)
   
  
  
    
  }
  // console.log(selectedCities)

  const getCompare = async(id) =>{
    try {
      const {data} = await axios.get(`${COMPARE_API}&user_id=${id}&token=${API_KEY}`)
      setCompare(data.departments)
      console.log(compare)
    } catch (error) {
      console.log(error)
    }
  }

  const postCompare = async (id) =>{
    try {
     const {data}= await axios.post(`${COMPARE_API}id=${id}&user_id=${userID}&token=${API_KEY}`);
    //  console.log( data)
    // console.log(compare)
    getCompare(userID)
    } catch (error) {
      console.log(error)
    }
  }

   const compareFilter=departments?.filter((item)=> compare?.includes(item.id))
   console.log(compareFilter) 



  const city= cities?.map((city) => ({ value: city.id, label: city.tr }))

     const handleSecondInputChange = (selectedOptions2) => {
      const selectedSecondIds= selectedOptions2.map((option) => option.label);
     
      // console.log(selectedOptions2)
      setSelectedSecondIds(selectedSecondIds);
      setSelectedUnies(selectedOptions2)
      
      
    };
     const handleThirdInputChange = (selectedOptions3) => {
      const selectedThirdIds= selectedOptions3.map((option) => option.label);
      // const selectedDeps= selectedOptions3.map((option) => ({label:option.department.tr,value:option.department.code}));
      // console.log(selectedOptions3)
      setSelectedThirdIds(selectedThirdIds);
      setSelectedDeps(selectedOptions3)
      
      
    };

   
    // console.log(selectedDeps)
    // console.log(selectedThirdIds)
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
// const UniversityImages = universities.map((item) => item.images);

// const allImages = UniversityImages.flat();

// for (const image of allImages) {
  
//   console.log(image);
// }



const filteredAllUniList =selectedSecondIds.length ? 
 allDepartments?.filter((item) => selectedSecondIds.includes(item.university.tr)).map((item)=>({...item,label:item.department.tr,value:item.department.code})):

allDepartments.map((item)=>({...item,label:item.department.tr,value:item.department.code}))


const filteredDepartments= filteredAllUniList?.filter((item)=>selectedThirdIds?.includes(item.label))

const values = {
    cities,
    setCities,
    city,
    universities,
    setUniversities,
    departments,
    setAllDepartments,
    allDepartments,
    selectedIds,
    selectedCities,
    selectedUnies,
    selectedDeps,

    selectedSecondIds,
    handleFirstInputChange,
    handleSecondInputChange,
    handleThirdInputChange,
    filteredUniList,
    filteredAllUniList,
    selectedItems,
    setSelectedItems,
    filteredDepartments,
    handleCompare,
    postCompare,
    compare,
    setCompare,
    compareFilter
  };
  return <HomeContext.Provider value={values}>{children}</HomeContext.Provider>;
};

export default HomeContextProvider;

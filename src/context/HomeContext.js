import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

export const HomeContext = createContext();

const API_KEY =
  "M5IJfY8iFQ/OpURXwOpQVTzUq8affdseVfOthIPmI4s6fxBUPqNYQ4g7UvukkqAf9WcQtdaBdYqtgpXNe5ce37d90ccf67cb521e26eb392c23f5";

// const FEATURED_API = `https://tr-yös.com/api/v1/location/allcities.php?token=${API_KEY}`;
const CITIES_API = `https://tr-yös.com/api/v1/location/allcities.php?token=${API_KEY}`;
const UNIVERSITIES_API = `https://tr-yös.com/api/v1/education/alluniversities.php?token=${API_KEY}`;
const DEPARTMENTS_API = `https://tr-yös.com/api/v1/education/alldepartmentsname.php?token=${API_KEY}`;
const ALLDEPARTMENTS_API = `https://tr-yös.com/api/v1/record/alldepartments.php?token=${API_KEY}`;



const HomeContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser)

 const userID = currentUser ? currentUser?.userID : null;
  const [cities, setCities] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [allDepartments, setAllDepartments] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedUnies, setSelectedUnies] = useState([]);
  const [selectedSecondIds, setSelectedSecondIds] = useState([]);
  const [selectedThirdIds, setSelectedThirdIds] = useState([]);
  const [selectedDeps, setSelectedDeps] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);


  // const [userID, setUserID] = useState(
  //   currentUser.userID || null)

  // const currentUserID = JSON.parse(sessionStorage.getItem("user")) || false;
  const [like, setLike] = useState([]);
  const [compare, setCompare] = useState([]);
  const [aktifCompare, setAktifCompare] = useState(false)
  
 
  const navigate = useNavigate();

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  console.log(currentUser);
  useEffect(
    (id) => {
      getCities();
      getUniversities();
      getDepartments();
      getAllDepartments();
      if (currentUser) {
        getLikes();
        getCompare(userID);
      }
    },
    []
  );

  // const handleCompare = (id) => {
  //   if (!compare?.includes(id)) {
  //     setCompare([...compare, id]);
  //     console.log(compare);
  //   } else {
  //     postCompare(id);
  //   }
  // };
  const handleCompare = (id) => {
    if(! compare.includes(id)){
      postCompare(id);
     
    }else{
      // setCompare((compare) =>
      // compare.filter((item) => item !== id) );
      deletCompare(id)
    }     
  };

  const handleDelete = async (id) => {

   deletCompare(id)

    // console.log(id)
    // try {

    //   const DELETE_APİ = `https://tr-yös.com/api/v1/users/deletecompare.php?id=${id}&user_id=${userID}&token=${API_KEY}`;
    //   await axios.get(
    //     `${DELETE_APİ}`

    //   );
    //   console.log("delete",DELETE_APİ);
    //   setCompare((compare) =>
    //   compare.filter((item) => item !== id)
    // );
    // } catch (error) {
    //   console.log(error);
    // }

   };
   const deletCompare = async(id) =>{
      console.log(id)
      try {
        const DELETE_APİ = `https://tr-yös.com/api/v1/users/deletecompare.php?id=${id}&user_id=${userID}&token=${API_KEY}`;
        await axios.get(
          `${DELETE_APİ}`
        );
        setCompare((compare) =>
        compare.filter((item) => item !== id)
      );
      } catch (error) {
        console.log(error);
      }
    }
  

  // ! ********* CITIES ************
  const getCities = async () => {
    try {
      const { data } = await axios.get(CITIES_API);
      // console.log(data);
      setCities(data);
    } catch (error) {
      console.log(error);
    }
  };
  // ! ********* UNIVERSITIES ************
  const getUniversities = async () => {
    try {
      const { data } = await axios.get(UNIVERSITIES_API);

      setUniversities(data);
    } catch (error) {
      console.log(error);
    }
  };
  // ! ********* DEPARTMENT ************
  const getDepartments = async () => {
    try {
      const { data } = await axios.get(DEPARTMENTS_API);
      // console.log(data);
      setDepartments(data);
    } catch (error) {
      console.log(error);
    }
  };

  // ! ********* ALL DEPARTMENTS  ************
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

  //! *********** COMPARE (KARŞILAŞTIRMA) **************
  

  
  
  const getCompare = async (userID) => {
    try {
      const COMPARE_GET=`https://tr-yös.com/api/v1/users/allcompares.php?user_id=${userID}&token=${API_KEY}`
      const { data } = await axios.get(
        `${COMPARE_GET}`
      );
    console.log(data)
     setCompare(data?.departments)
    } catch (error) {
      console.log(error);
    }
  };
  const postCompare = async (id) => {  
    try {
      const COMPARE_POST= `https://tr-yös.com/api/v1/users/addcompare.php?id=${id}&user_id=${userID}&token=${API_KEY}`
      const { data } = await axios.post(
        `${COMPARE_POST}`
      );
      setCompare([...compare,id])
      getCompare(userID);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // ! ********* LİKE (BEĞENME) ************

  const addLikes = async (id) => {
    try {
      const { data } = await axios.post(
        `https://tr-yös.com/api/v1/users/addfavorite.php?id=${id}&user_id=${currentUser}&token=${API_KEY}`
      );
  
      setLike([...like, id]);
      getLikes(currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  const getLikes = async () => {
    try {
      const { data } = await axios.get(
        `https://tr-yös.com/api/v1/users/allfavorites.php?user_id=${currentUser}&token=${API_KEY}`
      );
      // console.log(data.departments);
      setLike(data.departments);
    } catch (error) {
      console.log(error);
    }
  };
  const filteredLikes = allDepartments?.filter((item) =>
    like?.includes(item.id)
  );
  // console.log(filteredLikes)

  /*   Handle Like */
  const handleLike = (id, currentUser) => {
    addLikes(id, currentUser);
  };
  const removeLikes = async (id) => {
    try {
      await axios.delete(
        `/api/v1/users/deletefavorite.php?id=${id}&user_id=${currentUser}&token=${API_KEY}`
      );
      console.log("Successfully removed from favorites.");
      setLike((like) => like.filter((item) => item !== id));
    } catch (error) {
      console.log(error);
    }
  };
  // ! ********* MULTIINPUT ************

  const handleFirstInputChange = (selectedOptions) => {
    // console.log(selectedOptions)
    const selectedIds = selectedOptions.map((option) => option.value);

    //     // const selectedCities=selectedOptions.map((option) => option.label)
    //     setSelectedCities(selectedOptions)
    //     setSelectedIds(selectedIds);

    //     // console.log(selectedIds)

    //   }
    //   // console.log(selectedCities)

    //   const city= cities?.map((city) => ({ value: city.id, label: city.tr }))

    //      const handleSecondInputChange = (selectedOptions2) => {
    //       const selectedSecondIds= selectedOptions2.map((option) => option.label);

    //       // console.log(selectedOptions2)
    //       setSelectedSecondIds(selectedSecondIds);
    //       setSelectedUnies(selectedOptions2)

    //     };
    //      const handleThirdInputChange = (selectedOptions3) => {
    //       const selectedThirdIds= selectedOptions3.map((option) => option.label);
    //       // const selectedDeps= selectedOptions3.map((option) => ({label:option.department.tr,value:option.department.code}));
    //       // console.log(selectedOptions3)
    //       setSelectedThirdIds(selectedThirdIds);
    //       setSelectedDeps(selectedOptions3)

    //     };

    //     // console.log(selectedDeps)
    //     // console.log(selectedThirdIds)
    //     const filteredUniList=selectedIds.length ?
    //  universities?.filter((item) => selectedIds.includes(item.city)).map((item)=>({...item,
    //   value:item.code,
    //   label:item.tr
    // })) :
    // universities?.map((item) => ({
    //   ...item,
    //   value: item.code,
    //   label: item.tr,
    // }));
    // // const UniversityImages = universities.map((item) => item.images);

    // // const allImages = UniversityImages.flat();

    // // for (const image of allImages) {

    // //   console.log(image);
    // // }
    // const getCompare = async(id) =>{
    //   try {
    //     const {data} = await axios.get( `${COMPARE_GET_API}&id=${id}&token=${API_KEY}`)
    //     setCompare(data.departments)
    //     console.log(compare)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    // const postCompare = async (id) =>{
    //   try {
    //    const {data}= await axios.post(`${COMPARE_ADD_API}id=${id}&user_id=${userID}&token=${API_KEY}`);
    //    console.log(id)
    //    setCompare(data)
    //    console.log(compare)
    //    getCompare(id)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    // const filteredAllUniList =selectedSecondIds.length ?
    //  allDepartments?.filter((item) => selectedSecondIds.includes(item.university.tr)).map((item)=>({...item,label:item.department.tr,value:item.department.code})):

    // allDepartments.map((item)=>({...item,label:item.department.tr,value:item.department.code}))

    // const filteredDepartments= filteredAllUniList?.filter((item)=>selectedThirdIds?.includes(item.label))

    // const values = {

    setSelectedCities(selectedOptions);
    setSelectedIds(selectedIds);
  };

  const city = cities?.map((city) => ({ value: city.id, label: city.tr }));

  const handleSecondInputChange = (selectedOptions2) => {
    const selectedSecondIds = selectedOptions2.map((option) => option.label);

    setSelectedSecondIds(selectedSecondIds);
    setSelectedUnies(selectedOptions2);
  };
  const handleThirdInputChange = (selectedOptions3) => {
    const selectedThirdIds = selectedOptions3.map((option) => option.label);

    setSelectedThirdIds(selectedThirdIds);
    setSelectedDeps(selectedOptions3);
  };

  const filteredUniList = selectedIds.length
    ? universities
        ?.filter((item) => selectedIds.includes(item.city))
        .map((item) => ({ ...item, value: item.code, label: item.tr }))
    : universities?.map((item) => ({
        ...item,
        value: item.code,
        label: item.tr,
      }));

  const filteredAllUniList = selectedSecondIds.length
    ? allDepartments
        ?.filter((item) => selectedSecondIds.includes(item.university.tr))
        .map((item) => ({
          ...item,
          label: item.department.tr,
          value: item.department.code,
        }))
    : allDepartments.map((item) => ({
        ...item,
        label: item.department.tr,
        value: item.department.code,
      }));

  const filteredDepartments = filteredAllUniList?.filter((item) =>
    selectedThirdIds?.includes(item.label)
  );
  // ! ********* VALUES ************
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
    postCompare,
    getCompare,
    handleCompare,
    handleDelete,
    compare,
    setCompare,
    addLikes,
    removeLikes,
    filteredLikes,
    like,

  
    currentUser,

  };
  return <HomeContext.Provider value={values}>{children}</HomeContext.Provider>;
};

export default HomeContextProvider;

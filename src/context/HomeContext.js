import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const HomeContext = createContext();

const API_KEY =
  "M5IJfY8iFQ/OpURXwOpQVTzUq8affdseVfOthIPmI4s6fxBUPqNYQ4g7UvukkqAf9WcQtdaBdYqtgpXNe5ce37d90ccf67cb521e26eb392c23f5";

// const FEATURED_API = `https://tr-yös.com/api/v1/location/allcities.php?token=${API_KEY}`;
const CITIES_API = `https://tr-yös.com/api/v1/location/allcities.php?token=${API_KEY}`;
const UNIVERSITIES_API = `https://tr-yös.com/api/v1/education/alluniversities.php?token=${API_KEY}`;
const DEPARTMENTS_API = `https://tr-yös.com/api/v1/education/alldepartmentsname.php?token=${API_KEY}`;
const ALLDEPARTMENTS_API = `https://tr-yös.com/api/v1/record/alldepartments.php?token=${API_KEY}`;
const COMPARE_ADD_API = `https://tr-yös.com/api/v1/users/addcompare.php?`;
const COMPARE_GET_API = `https://tr-yös.com/api/v1/users/allcompares.php?`;

const HomeContextProvider = ({ children }) => {
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
  const [compare, setCompare] = useState([]);
  console.log(compare);

  // const currentUserID = JSON.parse(sessionStorage.getItem("user")) || false;
   const {currentUser}=useContext(AuthContext)

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    getCities();
    getUniversities();
    getDepartments();
    getAllDepartments();
    if(currentUser){
      getCompare(currentUser?.userID);

    }
  }, []);

  const getCities = async () => {
    try {
      const { data } = await axios.get(CITIES_API);

      setCities(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUniversities = async () => {
    try {
      const { data } = await axios.get(UNIVERSITIES_API);

      setUniversities(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDepartments = async () => {
    try {
      const { data } = await axios.get(DEPARTMENTS_API);

      setDepartments(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllDepartments = async () => {
    try {
      const { data } = await axios.get(ALLDEPARTMENTS_API);

      const shuffledData = shuffleArray(data);
      setAllDepartments(shuffledData);
    } catch (error) {
      console.log(error);
    }
  };
  const getCompare = async (userID) => {
    try {
      const { data } = await axios.get(
        `${COMPARE_GET_API}&id=${userID}&token=${API_KEY}`
      );
      setCompare(data.departments);
    } catch (error) {
      console.log(error);
    }
  };
  const postCompare = async (id) => {
    try {
      const { data } = await axios.post(
        `${COMPARE_ADD_API}id=${id}&user_id=${currentUser.userID}&token=${API_KEY}`
      );
      getCompare(currentUser.userID);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFirstInputChange = (selectedOptions) => {
    const selectedIds = selectedOptions.map((option) => option.value);

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
    compare,
  };
  return <HomeContext.Provider value={values}>{children}</HomeContext.Provider>;
};

export default HomeContextProvider;

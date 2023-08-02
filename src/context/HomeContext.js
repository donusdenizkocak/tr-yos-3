import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import { toastErrorNotify, toastSuccessNotify, toastWarnNotify } from "../helper/ToastNotify";

export const HomeContext = createContext();

const API_KEY =
  "M5IJfY8iFQ/OpURXwOpQVTzUq8affdseVfOthIPmI4s6fxBUPqNYQ4g7UvukkqAf9WcQtdaBdYqtgpXNe5ce37d90ccf67cb521e26eb392c23f5";
const CITIES_API = `https://tr-yös.com/api/v1/location/allcities.php?token=${API_KEY}`;
const UNIVERSITIES_API = `https://tr-yös.com/api/v1/education/alluniversities.php?token=${API_KEY}`;
const DEPARTMENTS_API = `https://tr-yös.com/api/v1/education/alldepartmentsname.php?token=${API_KEY}`;
const ALLDEPARTMENTS_API = `https://tr-yös.com/api/v1/record/alldepartments.php?token=${API_KEY}`;

const HomeContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

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

  const [like, setLike] = useState([]);
  const [compare, setCompare] = useState([]); 

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
    if (currentUser) {
      getLikes();
      getCompare(currentUser);
    }
  }, []);

  const handleCompare = (id) => {
    postCompare(id);
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const DELETE_APİ = `https://tr-yös.com/api/v1/users/deletecompare.php?id=${id}&user_id=${currentUser}&token=${API_KEY}`;
      await axios.get(`${DELETE_APİ}`);
      console.log("delete", DELETE_APİ);
      setCompare((compare) => compare.filter((item) => item !== id));
    } catch (error) {
      console.log(error);
    }
  };

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
      const COMPARE_GET = `https://tr-yös.com/api/v1/users/allcompares.php?user_id=${userID}&token=${API_KEY}`;
      const { data } = await axios.get(`${COMPARE_GET}`);
      console.log(data);
      setCompare(data?.departments);
    } catch (error) {
      console.log(error);
    }
  };
  const postCompare = async (id) => {
    try {
      const COMPARE_POST = `https://tr-yös.com/api/v1/users/addcompare.php?id=${id}&user_id=${currentUser}&token=${API_KEY}`;
      const { data } = await axios.post(`${COMPARE_POST}`);
      setCompare([...compare, id]);
      getCompare(currentUser);
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
      toastSuccessNotify("Favori ekleme Başarılı ");

      setLike([...like, id]);
      getLikes(currentUser);
    } catch (error) {
      toastErrorNotify("Favori ekleme Hatalı !!! ");
    }
  };

  const getLikes = async () => {
    try {
      const { data } = await axios.get(
        `https://tr-yös.com/api/v1/users/allfavorites.php?user_id=${currentUser}&token=${API_KEY}`
      );
      console.log(data.departments);
      setLike(data.departments);
    } catch (error) {
      console.log(error);
    }
  };
  const filteredLikes = allDepartments?.filter((item) =>
    like?.includes(item.id)
  );

  const removeLikes = async (id) => {
    try {
      await axios.delete(
        `/api/v1/users/deletefavorite.php?id=${id}&user_id=${currentUser}&token=${API_KEY}`
      );
      toastWarnNotify("Favori silme Başarılı");
      console.log("Successfully removed from favorites.");
      setLike((like) => like.filter((item) => item !== id));
    } catch (error) {
      console.log(error);
      toastErrorNotify("Favori silme Hatalı !!!")
    }
  };
  // ! ********* MULTIINPUT ************

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

    getLikes,

    currentUser,
  };
  return <HomeContext.Provider value={values}>{children}</HomeContext.Provider>;
};

export default HomeContextProvider;

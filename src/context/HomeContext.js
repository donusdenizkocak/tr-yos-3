import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const HomeContext = createContext();

const API_KEY =
  "M5IJfY8iFQ/OpURXwOpQVTzUq8affdseVfOthIPmI4s6fxBUPqNYQ4g7UvukkqAf9WcQtdaBdYqtgpXNe5ce37d90ccf67cb521e26eb392c23f5";

const FEATURED_API = `https://tr-yös.com/api/v1/location/allcities.php?token=${API_KEY}`;
const CITIES_API = `https://tr-yös.com/api/v1/location/allcities.php?token=${API_KEY}`;
const UNIVERSITIES_API = `https://tr-yös.com/api/v1/education/alluniversities.php?token=${API_KEY}`;
const DEPARTMENTS_API = `https://tr-yös.com/api/v1/education/alldepartmentsname.php?token=${API_KEY}`;

const HomeContextProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    getCities();
    getUniversities();
    getDepartments();
  }, []);

  const getCities = async () => {
    try {
      const { data } = await axios.get(CITIES_API);
      console.log(data);
      setCities(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUniversities = async () => {
    try {
      const { data } = await axios.get(UNIVERSITIES_API);
      //   console.log(data);
      setUniversities(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDepartments = async () => {
    try {
      const { data } = await axios.get(DEPARTMENTS_API);
      console.log(data);
      setDepartments(data);
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    cities,
    setCities,
    universities,
    setUniversities,
    departments,
  };
  return <HomeContext.Provider value={values}>{children}</HomeContext.Provider>;
};

export default HomeContextProvider;

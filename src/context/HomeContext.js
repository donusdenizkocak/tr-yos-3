import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const HomeContext = createContext();

const API_KEY =
  "M5IJfY8iFQ/OpURXwOpQVTzUq8affdseVfOthIPmI4s6fxBUPqNYQ4g7UvukkqAf9WcQtdaBdYqtgpXNe5ce37d90ccf67cb521e26eb392c23f5";

const FEATURED_API = `https://tr-yös.com/api/v1/location/allcities.php?token=${API_KEY}`;

const HomeContextProvider = ({ children }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    getCities(FEATURED_API);
  }, []);

  const getCities = async (api) => {
    try {
      const { data } = await axios.get(api);
      console.log(data);
      setCities(data);
    } catch (error) {
      console.log(error);
    }
  };
  const values = { cities, setCities };
  return <HomeContext.Provider value={values}>{children}</HomeContext.Provider>;
};

export default HomeContextProvider;

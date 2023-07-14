import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const API_KEY =
    "M5IJfY8iFQ/OpURXwOpQVTzUq8affdseVfOthIPmI4s6fxBUPqNYQ4g7UvukkqAf9WcQtdaBdYqtgpXNe5ce37d90ccf67cb521e26eb392c23f5";
  const REGISTER_API = `https://tr-yös.com/api/v1/users/newuser.php?token=${API_KEY}`;
  const LOGİN_API = `https://tr-yös.com/api/v1/users/login.php?token=${API_KEY}`;

  const [currentUser, setCurrentUser] = useState(false);
  const navigate = useNavigate();
  console.log(currentUser);

  const createUser = async (info) => {
    try {
      const data = await axios.post(`${REGISTER_API}`, info);
      setCurrentUser(data);
      navigate("/");
    } catch (error) {
      console.log(`CreateUserError: ${error}`);
    }
  };

  const loginUser = async (info) => {
    
    try {
      const data = await axios(`${LOGİN_API}`, info);
      setCurrentUser(data);
      console.log(currentUser);
      navigate("/");
    } catch (error) {
      console.log(`Login Error:${error}`);
      navigate("/");
    }
  };

  const values = { createUser, loginUser };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;

import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
export const AuthContext = createContext();

const API_KEY =
  "M5IJfY8iFQ/OpURXwOpQVTzUq8affdseVfOthIPmI4s6fxBUPqNYQ4g7UvukkqAf9WcQtdaBdYqtgpXNe5ce37d90ccf67cb521e26eb392c23f5";
const REGISTER_API = `https://tr-yös.com/api/v1/users/newuser.php?token=${API_KEY}`;
const LOGİN_API = `https://tr-yös.com/api/v1/users/login.php?token=${API_KEY}`;

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    sessionStorage.getItem("user") || false
  );
  const navigate = useNavigate();

  const createUser = async (info) => {
    const formData = new FormData();
    formData.append("email", info.email);
    formData.append("password1", info.password1);
    formData.append("password2", info.password2);
    formData.append("name", info.name);
    try {
      const { data } = await axios.post(`${REGISTER_API}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toastSuccessNotify("Kayıt başarılı");
      setCurrentUser(data.user.userId);
      sessionStorage.setItem("user", data.user.userId);
      navigate("/");
    } catch (error) {
      toastErrorNotify("Şifre veya Email hatalı");
    }
  };

  const loginUser = async (info) => {
    const formData = new FormData();
    formData.append("email", info.email);
    formData.append("password", info.password);
    try {
      const { data } = await axios.post(`${LOGİN_API}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toastSuccessNotify("Giriş başarılı");
      setCurrentUser(data.userID);
      sessionStorage.setItem("user", data.userID);
      navigate("/");
    } catch (error) {
      toastErrorNotify("Şifre veya Email hatalı");
    }
  };

  const logoutUser = () => {
    toastSuccessNotify("Çıkış başarılı");
    setCurrentUser(false);
    sessionStorage.clear();
  };

  const values = {
    createUser,
    loginUser,
    currentUser,
    setCurrentUser,
    logoutUser,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;

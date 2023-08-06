import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Universites from "../pages/Universites";
import Departments from "../pages/Departments";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Action from "../components/Action";
import Detail from "../pages/Detail";
import MyAccount from "../pages/MyAccount";
import CompareDepartments from "../components/compareDepartments/CompareDepartments";
import FavoriUni from "../pages/FavoriUni";
import PrivateRouter from "./PrivateRouter";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universites" element={<Universites />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="" element={<PrivateRouter />}>
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/compare" element={<CompareDepartments />} />
          <Route path="/favori" element={<FavoriUni />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Action />
      <Footer />
    </>
  );
};
export default AppRouter;

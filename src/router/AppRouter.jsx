import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Universites from "../pages/Universites";
import Departments from "../pages/Departments";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universites" element={<Universites />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};
export default AppRouter;

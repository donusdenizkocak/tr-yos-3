
// import CardUniversities from "./components/CardUniversities";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <>
      <HomeNavbar />
      <Routes>
      <Route path="/" element={<Home/>}/>

      </Routes>

      {/* <CardUniversities /> */}

      <Footer />
    </>
  );
};

export default AppRouter;

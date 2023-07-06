import Footer from "./components/Footer";
import HomeNavbar from "./components/HomeNavbar";

import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

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

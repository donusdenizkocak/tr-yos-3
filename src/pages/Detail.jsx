import AboutDetail from "../components/detailComponents/AboutDetail";
import BasicDetail from "../components/detailComponents/BasicDetail";
import DetailHeader from "../components/detailComponents/DetailHeader";
import MainInfo from "../components/detailComponents/MainInfo";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import DetailUnvCard from "../components/detailComponents/DetailUnvCard";
import { HomeContext } from "../context/HomeContext";
import axios from "axios";

const API_KEY =
  "M5IJfY8iFQ/OpURXwOpQVTzUq8affdseVfOthIPmI4s6fxBUPqNYQ4g7UvukkqAf9WcQtdaBdYqtgpXNe5ce37d90ccf67cb521e26eb392c23f5";

const Detail = () => {
  const [imagesData, setImagesData] = useState([]);
  console.log(imagesData);
  const { id } = useParams();
  const { allDepartments, universities } = useContext(HomeContext);
  const [departmentDetails, setDepartmentDetails] = useState(null);
  useEffect(() => {
    // Function to fetch department details by ID from allDepartments
    const fetchDepartmentDetails = () => {
      const departments = allDepartments.find((dep) => dep.id === id);
      setDepartmentDetails(departments);
      // console.log(departments)
      getImg(id);
    };

    fetchDepartmentDetails();
  }, [allDepartments, id]);

  const getImg = async (cardId) => {
    try {
      const { data } = await axios(
        `https://tr-yös.com/api/v1/record/departmentimage.php?id=${cardId}&token=${API_KEY}`
      );
      setImagesData(data.image);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#f1f5f8]"
    >
      <DetailHeader
        universityImage={imagesData}
        departments={departmentDetails}
      />
      <div className="container mx-auto flex gap-5 py-5">
        <div className="flex flex-col gap-5">
          <MainInfo departments={departmentDetails} />
          <AboutDetail departments={departmentDetails} />
          <BasicDetail departments={departmentDetails} />
        </div>
        <div>
          <DetailUnvCard departments={departmentDetails} />
        </div>
      </div>
    </motion.div>
  );
};

export default Detail;

import AboutDetail from "../components/detailComponents/AboutDetail";
import BasicDetail from "../components/detailComponents/BasicDetail";
import DetailHeader from "../components/detailComponents/DetailHeader";
import MainInfo from "../components/detailComponents/MainInfo";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { SubmitReview } from "../components/detailComponents/SubmitReview";
import DetailUnvCard from "../components/detailComponents/DetailUnvCard";
import { HomeContext } from "../context/HomeContext";
const Detail = () => {
  const { id } = useParams()
  const { allDepartments } = useContext(HomeContext);
  const [departmentDetails, setDepartmentDetails] = useState(null);
  useEffect(() => {
    // Function to fetch department details by ID from allDepartments
    const fetchDepartmentDetails = () => {
      const department = allDepartments.find((dep) => dep.id === id);
      setDepartmentDetails(department);
      console.log(department)
    };

    fetchDepartmentDetails();
  }, [allDepartments, id]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[#f1f5f8]">
      <DetailHeader />
      <div className="container mx-auto flex gap-5">
        <div className="flex flex-col gap-5">
          <MainInfo department={departmentDetails}/>
          <AboutDetail department={departmentDetails}/>
          <BasicDetail department={departmentDetails} />
          <SubmitReview />
        </div>
        <div>
          <DetailUnvCard department= {departmentDetails}/>
        </div>
      </div>
    </motion.div>
  );
};


export default Detail;

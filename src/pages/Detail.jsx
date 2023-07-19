import AboutDetail from "../components/detailComponents/AboutDetail";
import BasicDetail from "../components/detailComponents/BasicDetail";
import DetailHeader from "../components/detailComponents/DetailHeader";
import MainInfo from "../components/detailComponents/MainInfo";
import { motion } from "framer-motion";
import { SubmitReview } from "../components/detailComponents/SubmitReview";
import DetailUnvCard from "../components/detailComponents/DetailUnvCard";
const Detail = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[#f1f5f8]">
      <DetailHeader />
      <div className="container mx-auto flex gap-5">
        <div className="flex flex-col gap-5">
          <MainInfo />
          <AboutDetail />
          <BasicDetail />
          <SubmitReview />
        </div>
        <div>
          <DetailUnvCard />
        </div>
      </div>
    </motion.div>
  );
};


export default Detail;

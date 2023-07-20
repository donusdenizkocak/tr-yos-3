import CardUniversites from "../components/universitesComponents/CardUniversites";
import { motion } from "framer-motion";
import { HomeContext } from "../context/HomeContext";
import { useContext } from "react";

const framerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};


const Universites = () => {
  const{universities,cities}=useContext(HomeContext);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
    >
      <div
        className="h-[240px] w-full "
        style={{
          backgroundImage: "url(./image/bnr4.jpg)",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-full flex flex-col justify-end text-white mx-auto md:container pb-8">
          <h2 className=" font-bold text-[50px]">Universites</h2>
          <p className="text-sm font-medium">
            Tüm Üniversiteleri Kontrol Edebilirsiniz
          </p>
        </div>
      </div>
      <motion.div initial="hidden" animate="visible" variants={framerContainer}>
        {universities.map((uni,index) => (
          <CardUniversites {...uni} key={index} cities={cities} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Universites;

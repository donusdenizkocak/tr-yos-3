import CardUniversites from "../components/universitesComponents/CardUniversites";
import { motion } from "framer-motion";

const mapss = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

const framerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};


const Universites = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
    >
      <div
        className="h-[240px] w-full "
        style={{
          backgroundImage: "url(./image/bnr16.png)",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-full flex flex-col justify-end text-white md:mx-auto md:container pb-8">
          <h2 className=" font-bold text-[50px]">Universites</h2>
          <p className="text-sm font-medium">
            Tüm Üniversiteleri Kontrol Edebilirsiniz
          </p>
        </div>
      </div>
      <motion.div initial="hidden" animate="visible" variants={framerContainer}>
        {mapss.map((map, i) => (
          <CardUniversites {...map} key={i} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Universites;

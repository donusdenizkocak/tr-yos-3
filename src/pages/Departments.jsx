
import DepartmentsForm from "../components/departmentsComponents/DepartmentsForm";
import DeparmentsCard from "../components/departmentsComponents/DeparmentsCard";
import { motion } from "framer-motion";

const Departments = () => {
  return (
    <motion.div
      className="flex flex-col gap-12 mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
        <div className="h-full flex flex-col justify-end text-white md:mx-auto md:container pb-8">
          <h2 className=" font-bold text-[50px]">Our Departments</h2>
          <p className="text-sm font-medium">Your dream find the university</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row container mx-auto  gap-7">
        <div className="flex justify-center md:justify-start md:items-start ">
          <DepartmentsForm />
        </div>
        <div className="flex ">
          <DeparmentsCard />
        </div>
      </div>
    </motion.div>
  );
};

export default Departments;

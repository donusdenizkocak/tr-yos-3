import { motion } from "framer-motion";
import uuid from 'react-uuid';

const framerItem = {
  hidden: { opacity: 0, translateY: 20 },
  visible: { opacity: 1, translateY: 0 },
};
const CardUniversites = ({ id,code,tr,data,logo,cities,city}) => {

  // console.log(data);
  // console.log(cities)
  const filteredCity=cities.filter((item)=>item.id===city).map((item)=>item.tr)

  // console.log(filteredCity)

  return (
    <motion.div
      className=" container flex flex-col justify-center items-center sm:flex-row sm:justify-start border-2 border-gray-300 rounded-md mx-auto my-10"
      key={uuid()}
      variants={framerItem}
    >
      <div className="w-44 h-44 m-6 border-2 border-gray-300 rounded-md">
        <img
          src={logo}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="my-6">
        <div className="flex">
          <p className="text-xs mr-2 mb-2 p-2 font-medium border-none rounded-md bg-orange-100 text-orange-500">
            5 Faculties
          </p>
          <p className="text-xs mr-2 mb-2 p-2 font-medium border-none rounded-md bg-green-100 text-green-500">
            4 Departments
          </p>
        </div>

        <div>
          <p className="font-bold text-xl mb-2">
            {tr}
          </p>
          <p className="text-xs mb-1"> {filteredCity}</p>
         
          <p className="text-xs mb-2">
         {data?.adress ? data?.adress : `ADDRESS`}
          </p>
          <button className="mt-2 mr-3 p-3 text-sm font-medium border-2 border-orange-500 rounded-md bg-orange-100 text-orange-500 hover:bg-orange-500 hover:text-white">
            +90 {data?.phone}
          </button>
          <button className="mt-2 p-3 text-sm font-medium border-2 border-green-500 rounded-md bg-green-100 text-green-500  hover:bg-green-500 hover:text-white">
            M Send Massege{" "}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CardUniversites;

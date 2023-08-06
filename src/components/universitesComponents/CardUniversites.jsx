import { motion } from "framer-motion";
import { useContext } from "react";
import { HomeContext } from "../../context/HomeContext";
import settingGif from "../../helper/Settings.gif";

const framerItem = {
  hidden: { opacity: 0, translateY: 20 },
  visible: { opacity: 1, translateY: 0 },
};
const CardUniversites = ({ id, code, tr, data, logo, cities, city }) => {
  const { allDepartments } = useContext(HomeContext);

  const universityDepartments = allDepartments.filter((department) =>
    department?.university?.code.includes(code)
  );
  const facultySet = new Set();
  const departmentSet = new Set();

  universityDepartments.forEach((department) => {
    facultySet.add(department.faculty.code);
    departmentSet.add(department.department.code);
  });

  const facultyCount = facultySet.size;
  const departmentCount = departmentSet.size;

  const filteredCity = cities
    .filter((item) => item.id === city)
    .map((item) => item.tr);

  return (
    <motion.div
      className="w-[320px] sm:w-[25rem] md:w-[45rem] flex flex-col items-center md:flex-row md:justify-start mx-auto border-2 gap-5 p-4 border-gray-300 rounded-md "
      key={id}
      variants={framerItem}
    >
      <div className="w-44 h-44 outline-2 outline outline-gray-300 rounded-md flex flex-2">
        <img src={logo || settingGif} className="w-full h-full object-fill" />
      </div>

      <div className="flex-1">
        <div className="flex justify-center md:justify-start">
          <p className="text-xs mr-2 mb-2 p-2 font-medium border-none rounded-md bg-orange-100 text-orange-500">
            {facultyCount} Faculties
          </p>
          <p className="text-xs mr-2 mb-2 p-2 font-medium border-none rounded-md bg-green-100 text-green-500">
            {departmentCount} Departments
          </p>
        </div>

        <div className="flex flex-col justify-center md:justify-start">
          <p className="font-bold text-xl mb-2">{tr}</p>
          {filteredCity ? (
            <p className="text-xs mb-1 text-gray-400">{filteredCity}</p>
          ) : (
            <p
              className="text-xs mb-1  text-white"
              style={{ fontStyle: "italic" }}
            >
              No City Available
            </p>
          )}

          {data?.adress ? (
            <p className="text-xs text-gray-400 mb-2">{data?.adress}</p>
          ) : (
            <p
              className="text-xs mb-2 text-white"
              style={{ fontStyle: "italic" }}
            >
              No Address Available
            </p>
          )}
          <div className="flex flex-col md:flex-row gap-3">
            {data?.phone && (
              <button className="w-full md:w-[155px] p-3 text-sm font-medium border-2 border-orange-500 rounded-md bg-orange-100 text-orange-500 hover:bg-orange-500 hover:text-white">
                +90 {data?.phone}
              </button>
            )}

            <button className="w-full md:w-[155px] p-3 text-sm font-medium border-2 border-green-500 rounded-md bg-green-100 text-green-500  hover:bg-green-500 hover:text-white">
              Send Massege
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardUniversites;

import { useContext, useEffect, useState  } from "react";
import CardHome from "./CardHome";
import { HomeContext } from "../../context/HomeContext";

const CardHomeIntro = () => {

  const { universities, allDepartments } = useContext(HomeContext);

  const records = allDepartments.slice(0, 12);

  console.log(allDepartments);

  const universityImagesMap = universities.reduce((map, university) => {
    if (university && university.images && university.images.length > 0) {
      map[university.tr] = university.images[0];
    }
    return map;
  }, {});
  console.log(universityImagesMap);

  return (
    <div className=" px-4 text-center p-5">
      <h2 className="text-5xl p-4">Our Departments</h2>
      <p className="pb-6">your dream find the university</p>
      <div className="container flex justify-center  mx-auto items-center flex-wrap gap-5 my-5">
        {records?.map((item) => (
          <CardHome
            {...item}
            key={item.id}
            universityImage={universityImagesMap}
          />
        ))}
      </div>
    );
  }
export default CardHomeIntro;

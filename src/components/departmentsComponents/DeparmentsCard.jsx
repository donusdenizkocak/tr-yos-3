import { HomeContext } from "../../context/HomeContext";
import { useContext } from "react";
import CardHome from "../homeComponents/CardHome";

const DeparmentsCard = () => {
  const { allDepartments, filteredDepartments, universities } =
    useContext(HomeContext);
  const someDeps = allDepartments.slice(0, 12);

  const universityImagesMap = universities.reduce((map, university) => {
    if (university && university.images && university.images.length > 0) {
      map[university.tr] = university.images[0];
    }
    return map;
  }, {});

  return (
    <div className="container m-auto flex justify-center items-center flex-wrap  gap-5">
      {filteredDepartments.length
        ? filteredDepartments?.map((item, index) => (
            <CardHome
              {...item}
              key={item.id}
              universityImage={universityImagesMap}
            />
          ))
        : someDeps?.map((item, id) => (
            <CardHome
              {...item}
              key={item.id}
              universityImage={universityImagesMap}
            />
          ))}
    </div>
  );
};

export default DeparmentsCard;

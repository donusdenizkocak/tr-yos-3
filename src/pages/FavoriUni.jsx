import { HomeContext } from "../context/HomeContext";
import { useContext, useEffect } from "react";
import CardHome from "../components/homeComponents/CardHome";
import heart from "../helper/Running heart.gif";

const FavoriUni = () => {
  const { getLikes, filteredLikes, universities } = useContext(HomeContext);

  useEffect(() => {
    getLikes();
  }, []);

  const universityImagesMap = universities.reduce((map, university) => {
    if (university && university.images && university.images.length > 0) {
      map[university.tr] = university.images[0];
    }
    return map;
  }, {});
  

  return (
    <div>
      <div
        className="h-[240px] w-full "
        style={{
          backgroundImage: "url(./image/bnr4.jpg)",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-full flex flex-col justify-end text-white mx-auto md:container pb-8 ">
          <h2 className=" font-bold text-[50px]">Favori Universities</h2>
        </div>
      </div>
      <div className="container flex justify-center  mx-auto items-center flex-wrap gap-5 my-5">
        {(filteredLikes.length > 0) ? (
          filteredLikes?.map((item, index) => (
            <CardHome
              {...item}
              key={index}
              universityImage={universityImagesMap}
            />
          ))
        ) : (
          <div className="min-h-screen flex flex-col gap-4 justify-center items-center w-full ">
            <h1 className="text-lg font-bold ">
              You don't have a favorite university...
            </h1>
            <div >
              <img src={heart} alt="heart" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoriUni;

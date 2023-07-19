import { useContext, useEffect, useState  } from "react";
import CardHome from "./CardHome";
import { HomeContext } from "../../context/HomeContext";

const CardHomeIntro = () => {
    const { universities } = useContext(HomeContext);
    const [randomRecords, setRandomRecords] = useState([]);
  
    useEffect(() => {
      const shuffleData = () => {
        const shuffledUniversities = universities.sort(() => 0.5 - Math.random());
        const randomRecords = shuffledUniversities.slice(0, 12);
        setRandomRecords(randomRecords);
      };
  
      shuffleData();
    }, [universities]);
  
    return (
      <div className="px-4 text-center p-5">
        <h2 className="text-5xl p-4">Our Departments</h2>
        <p className="pb-6">Your dream, find the university</p>
        <div className="flex justify-center mx-auto items-center flex-wrap gap-5 my-5" style={{ maxWidth: "1600px" }}>
          {randomRecords.map((item) => (
            <CardHome {...item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
export default CardHomeIntro;

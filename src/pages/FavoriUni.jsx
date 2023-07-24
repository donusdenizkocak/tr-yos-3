import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

// import CardHome from "../components/homeComponents/CardHome";

const FavoriUni = () => {
  const [dataFav, setDataFav] = useState([]);
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser.userID);
  const getFav = async () => {
    const API_KEY =
      "M5IJfY8iFQ/OpURXwOpQVTzUq8affdseVfOthIPmI4s6fxBUPqNYQ4g7UvukkqAf9WcQtdaBdYqtgpXNe5ce37d90ccf67cb521e26eb392c23f5";
    const GETFAV_API = `https://tr-yös.com/api/v1/users/allfavorites.php?user_id=${currentUser.userID}?token=${API_KEY}`;

    if (currentUser) {
      try {
        const { data } = await axios.get(GETFAV_API);
        setDataFav(data.departments);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getFav();
  }, []);

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

      {/* <CardHome /> */}
    </div>
  );
};

export default FavoriUni;

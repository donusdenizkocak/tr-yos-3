
import { AuthContext } from "../context/AuthContext";

import { HomeContext } from "../context/HomeContext"
import { useContext } from "react";

import CardHome from "../components/homeComponents/CardHome";

const FavoriUni = () => {
  const {like,filteredLikes} =useContext(HomeContext)
  // const { allDepartments,like } = useContext(AuthContext);
  // const filteredLikes = allDepartments?.filter((item) =>
  //   like?.includes(item.id)
  // );
  // const [dataFav, setDataFav] = useState([]);

  // console.log(currentUser.userID);
  // const getFav = async () => {
  //   const API_KEY =
  //     "M5IJfY8iFQ/OpURXwOpQVTzUq8affdseVfOthIPmI4s6fxBUPqNYQ4g7UvukkqAf9WcQtdaBdYqtgpXNe5ce37d90ccf67cb521e26eb392c23f5";
  //   const GETFAV_API = `https://tr-yös.com/api/v1/users/allfavorites.php?user_id=${currentUser.userID}?token=${API_KEY}`;

  //   if (currentUser) {
  //     try {
  //       const { data } = await axios.get(GETFAV_API);
  //       setDataFav(data.departments);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };
  // useEffect(() => {
  //   getFav();
  // }, []);

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
        {filteredLikes?.map((item, index) => (
        <CardHome {...item} key={index} />
      ))} 
      </div>
     
    </div>
  );
};

export default FavoriUni;

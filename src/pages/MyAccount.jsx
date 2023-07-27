import Profil from "../components/myAccountComponents/Profil";
import MyAccountForm from "../components/myAccountComponents/MyAccountForm";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";
const MyAccount = () => {
  const { userID } = useContext(HomeContext);
  const [userData, setUserData] = useState([]);
  const API_KEY =
    "M5IJfY8iFQ/OpURXwOpQVTzUq8affdseVfOthIPmI4s6fxBUPqNYQ4g7UvukkqAf9WcQtdaBdYqtgpXNe5ce37d90ccf67cb521e26eb392c23f5";

  useEffect(() => {
    // ----API isteğini yapacak fonksiyon------
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://tr-yös.com/api/v1/users/user.php?id=${userID}&token=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("API request failed!");
        }
        const data = await response.json();
        if (data.status === "success") {
          setUserData(data);
          console.log(data);
          console.log(userData);
        } else {
          throw new Error("API request failed!");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    console.log(userData);
    fetchData(); //---- API isteği
  }, [userID, API_KEY]);
  return (
    <>
      <div
        className="h-[240px] w-full "
        style={{
          backgroundImage: "url(./image/bnr4.jpg)",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-full flex flex-col justify-end text-white mx-auto md:container pb-8">
          <h2 className=" font-bold text-[50px] ">My Account</h2>
          <p className="text-sm font-medium"></p>
        </div>
      </div>
      {userData && (
        <div className="flex justify-center items-center gap-9 container mx-auto my-10">
          <Profil name={userData.name} email={userData.email} />
          <MyAccountForm userData={userData} />
        </div>
      )}
    </>
  );
};
export default MyAccount;

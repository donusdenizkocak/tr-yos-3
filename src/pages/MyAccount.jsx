import Profil from "../components/myAccountComponents/Profil";
import MyAccountForm from "../components/myAccountComponents/MyAccountForm";
import { useEffect, useState } from "react";

const MyAccount = () => {
  const [userData, setUserData] = useState(null);
  const API_KEY = "M5IJfY8iFQ/OpURXwOpQVTzUq8affdseVfOthIPmI4s6fxBUPqNYQ4g7UvukkqAf9WcQtdaBdYqtgpXNe5ce37d90ccf67cb521e26eb392c23f5";
  const id = "1687685322734";   //--- API'den almak istediğiniz kullanıcının id'si

  useEffect(() => {
    // ----API isteğini yapacak fonksiyon------
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://tr-yös.com/api/v1/users/user.php?id=${id}&token=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("API request failed!");
        }
        const data = await response.json();
        if (data.status === "success") {
          setUserData(data.user);
        } else {
          throw new Error("API request failed!");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData(); //---- API isteği
  }, [id, API_KEY]);
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
          <p className="text-sm font-medium">
         
          </p>
        </div>
      </div>
      {userData && (
      <div className="flex justify-center items-center gap-9 container mx-auto my-10">
        <Profil name={userData.name} email={userData.email}/>
       <MyAccountForm/>
      </div>
       )}
    </>
  );
};

export default MyAccount;

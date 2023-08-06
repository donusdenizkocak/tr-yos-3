import Profil from "../components/myAccountComponents/Profil";
import MyAccountForm from "../components/myAccountComponents/MyAccountForm";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";


const API_KEY =
  "M5IJfY8iFQ/OpURXwOpQVTzUq8affdseVfOthIPmI4s6fxBUPqNYQ4g7UvukkqAf9WcQtdaBdYqtgpXNe5ce37d90ccf67cb521e26eb392c23f5";

const MyAccount = () => {
  const { currentUser } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  const [updatedUser, setUpdatedUser] = useState([]);
  const getUserData = async () => {
    try {
      const { data } = await axios(
        `https://tr-yös.com/api/v1/users/user.php?id=${currentUser}&token=${API_KEY}`
      );
      setUserData(data);

      setUpdatedUser({
        name: data?.user?.name,
        country: data?.user?.country,
        city: data?.user?.city,
        phone: data?.user?.phone,
        about: data?.user?.about,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData(); 
  }, []);

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
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-9 container mx-auto my-10">
        <Profil userData={userData} />
        <MyAccountForm
          updatedUser={updatedUser}
          setUpdatedUser={setUpdatedUser}
          userData={userData}
          getUserData={getUserData}
        />
      </div>
    </>
  );
};
export default MyAccount;

import Profil from "../components/myAccountComponents/Profil";
import MyAccountForm from "../components/myAccountComponents/MyAccountForm";

const MyAccount = () => {
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
      <div className="flex justify-center items-center gap-9 container mx-auto my-10">
        <Profil />
       <MyAccountForm/>
      </div>
    </>
  );
};

export default MyAccount;

import { NavLink } from "react-router-dom";

const Profil = ({ userData }) => {
  const { user } = userData;
  return (
    <div
      className="flex flex-col justify-center items-center w-[350px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-lg  gap-5 p-3
    "
    >
      <div className="w-24 rounded-full border-3 mt-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
        <img
          src="https://via.placeholder.com/650x650"
          className="w-24 rounded-full"
          alt="Profil Image"
        />
      </div>
      <div
        className="flex flex-col  justify-center 
      items-center p-3 gap-2 w-full "
      >
        <h2 className="font-bold text-[#05264e] ">{user?.name} </h2>
        <p className="text-[13px] text-gray-500">{user?.email}</p>
      </div>
      <div className="flex flex-col p-3  gap-5 w-full">
        <button
          className="hover:bg-[#017efa]  w-full p-5 border-2 bg-[#017efa1a] border-[#017efa] rounded-lg text-[#017efa] hover:text-white font-semibold transition-all ease-in  duration-200
        "
        >
          {user?.phone || " 05** *** ** **"}
        </button>
        <button className="hover:bg-[#00BE82] bg-[#00be821f] w-full p-5 border-2  border-[#00BE82] rounded-lg text-[#017efa] hover:text-white font-semibold transition-all ease-in  duration-200">
          info@gmail.com
        </button>
      </div>
      <div className="p-3 flex-col flex  gap-5 w-full">
        <NavLink
          style={({ isActive }) => ({
            color: isActive && "text-white",
            background: isActive && "bg-[#017efa]",
          })}
          className="bg-[#f0f5fb] w-full p-5 text-[#144273] hover:bg-[#017efa] hover:text-white rounded-lg font-medium transition-all ease-in  duration-300"
        >
          My Profil
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive && "text-white",
            background: isActive && "bg-[#017efa]",
          })}
          className="bg-[#f0f5fb] w-full p-5 text-[#144273] hover:bg-[#017efa] hover:text-white rounded-lg font-medium transition-all ease-in  duration-300"
        >
          Change Password
        </NavLink>
      </div>
    </div>
  );
};

export default Profil;

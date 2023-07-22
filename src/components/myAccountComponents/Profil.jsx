import React from "react";

const Profil = () => {
  return (
    <div
      className="flex flex-col justify-center items-center w-[350px] shadow-lg rounded-lg  gap-5 p-3
    "
    >
      <div className="w-20 rounded-full border-3 ">
        <img
          src="https://via.placeholder.com/650x650"
          className="w-20 rounded-full"
          alt=""
        />
      </div>
      <div className="flex flex-col  justify-center 
      items-center p-3 gap-5">
        <h2>Jin </h2>
        <p>jin@gmail.com</p>
      </div>
      <div className="flex flex-col p-3  gap-5 w-full">
        <button
          className="bg-[#00aced] w-full p-5 border-4 rounded-lg
        "
        >
          +555555555555
        </button>
        <button className="bg-[#e5f2fe] w-full p-5 border-4 rounded-lg">
          info@gmail.com
        </button>
      </div>
      <div className="p-3 flex-col flex  gap-5 w-full">
        <button className="bg-[#00aced] w-full p-5 border-4 rounded-lg">
          {" "}
          My Profil
        </button>
        <button className="bg-[#e5f2fe] w-full p-5 border-4 rounded-lg">
          {" "}
          Password{" "}
        </button>
      </div>
    </div>
  );
};

export default Profil;

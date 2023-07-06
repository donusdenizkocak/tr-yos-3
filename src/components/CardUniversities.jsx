import React from "react";
import universty from "../assets/images/universty.jpg";

const CardUniversities = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-start border-2 border-gray-300 rounded-md mx-20 mt-20 mb-6">

        <div className="w-44 h-44 m-6 border-2 border-gray-300 rounded-md">
          <img  src={universty} alt="" />
        </div>


        <div className="my-6">
          <div className="flex">
            <p className="text-xs mr-2 mb-2 p-2 font-medium border-none rounded-md bg-orange-100 text-orange-500">5 Faculties</p>
            <p className="text-xs mr-2 mb-2 p-2 font-medium border-none rounded-md bg-green-100 text-green-500">4 Departments</p>
          </div>

          <div>
            <p className="font-bold text-xl mb-2">ACIBADEM MEHMET ALI AYDINLAR UNIVERSTY</p>
            <p className="text-xs mb-1">K İstanbul</p>
            <p className="text-xs mb-2">
              İçerenköy Mah. Kayışdağı Cad. No:32 İçerenköy 34752
              Ataşehir/İstanbul
            </p>
            <button className="mt-2 mr-3 p-3 text-sm font-medium border-2 border-orange-500 rounded-md bg-orange-100 text-orange-500 hover:bg-orange-500 hover:text-white">P (352)-444-9977</button>
            <button className="mt-2 p-3 text-sm font-medium border-2 border-green-500 rounded-md bg-green-100 text-green-500  hover:bg-green-500 hover:text-white">M Send Massege </button>
          </div>
        </div>


      </div>
    </>
  );
};

export default CardUniversities;

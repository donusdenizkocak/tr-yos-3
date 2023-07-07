import React from "react";
import CardHome from "./CardHome";
import data from "../../helper/data";
const CardHomeIntro = () => {
  return (
    <div className=" px-4 text-center p-5">
      <h2 className="text-5xl p-4">Our Departments</h2>
      <p className="pb-6">your dream find the university</p>
      <div className="flex justify-center  mx-auto items-center flex-wrap gap-5 my-5" style={{maxWidth:"1600px"}}>
        {data.map((item, index) => (
          <CardHome item={item} key={index} />
        ))}
      </div>
    </div>
  );
};
export default CardHomeIntro;

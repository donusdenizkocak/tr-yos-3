import React from "react";

import data from "../../helper/data";
import DeparmentsIntro from "./DeparmentsIntro";

const DeparmentsCard = () => {
  return (
    <div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl p-4">Our Departments</h2>
        <p className="pb-6">your dream find the university</p>
        <div className="container m-auto grid sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-6 gap-5">
          {data.map((item, index) => (
            <DeparmentsIntro {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeparmentsCard;

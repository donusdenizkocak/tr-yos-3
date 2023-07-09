import React from "react";

import data from "../../helper/data";
import DeparmentsIntro from "./DeparmentsIntro";

const DeparmentsCard = () => {
  return (
    <div className="container m-auto flex justify-center items-center flex-wrap  gap-5">
      {data.map((item, index) => (
        <DeparmentsIntro {...item} key={index} />
      ))}
    </div>
  );
};

export default DeparmentsCard;

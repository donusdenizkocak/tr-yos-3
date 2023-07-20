import React, { useState } from "react";
import { Icon } from "../../helper/Icons";

const BasicDetail = ({ department }) => {
  const [show, setShow] = useState(true);
  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <div className="bg-white rounded-md">
      <div className=" justify-between p-2 mt-8 ">
        <div className="flex justify-between  space-x-96 ">
          <h3 className=" text-darkBlue font-bold text-2xl mb-4 ">
            Basic Detail
          </h3>
          <div className="" onClick={handleToggle}>
            {show ? (
              <Icon name="arrowUp" size="25" color="darkblue" />
            ) : (
              <Icon name="arrowdown" size="25" color="darkblue" />
            )}
          </div>
        </div>
      </div>

      {show && (
        <div className="rounded-md text-blue-900 underline p-3  ">
          <ul className="flex flex-row justify-around items-center">
            <li className="w-[150px] py-3 bg-[#f1f5f8] flex flex-col justify-center items-center">
              <Icon name="bed" size="30" color="darkblue" />
              <p className=" text-center  text-lg ">3</p>
            </li>
            <li className=" w-[150px] py-3 bg-[#f1f5f8] flex flex-col justify-center items-center">
              <Icon name="group" size="30" color="darkblue" />
              <p className=" text-center  text-lg ">4,240</p>
            </li>
            <li className="w-[150px] py-3 bg-[#f1f5f8] flex flex-col justify-center items-center">
              <Icon name="warehouse" size="30" color="darkblue" />
              <p className=" text-center  text-lg ">1</p>
            </li>
            <li className="w-[150px] py-3 bg-[#f1f5f8] flex flex-col justify-center items-center">
              <Icon name="buildingCircleCheck" size="30" color="darkblue" />
              <p className=" text-center  text-lg ">Active</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BasicDetail;

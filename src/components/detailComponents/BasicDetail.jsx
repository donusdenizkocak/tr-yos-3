import React, { useState } from "react";
import { Icon } from "../../helper/Icons";

const BasicDetail = () => {
  const [show, setShow] = useState(true);
  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <div>
      <div className=" justify-between p-2 mt-8 ">
        <div className="flex space-x-96 justify-end">
          <h3 className=" text-darkBlue text-lg ">Basic Detail</h3>
          <div onClick={handleToggle}>
            <Icon name="arrowUp" size="25" color="darkblue" />
          </div>
        </div>
      </div>

      {show && (
        <div className="flex p-10 mb-6 relative  rounded-md  bg-transparent text-blue-900 underline  ">
          <ul className="flex flex-wrap grid-cols-2 p-8 w-full justify-around">
            <li className=" p-20 bg-gray-200">
              <Icon name="bed" size="50" color="darkblue" />
              <p>3</p>
            </li>
            <li className=" p-20 bg-gray-200">
              <Icon name="group" size="50" color="darkblue" />
              <p>4,240</p>
            </li>
            <li className=" p-20 bg-gray-200">
              <Icon name="warehouse" size="50" color="darkblue" />
              <p>1</p>
            </li>
            <li className=" p-20 bg-gray-200">
              <Icon name="buildingCircleCheck" size="50" color="darkblue" />
              <p>Active</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BasicDetail;

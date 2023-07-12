import React, { useState } from "react";
import { Icon } from "../../helper/Icons";

const BasicDetail = () => {
  const [show, setShow] = useState(true);
  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <div>
      <div className=" justify-between p-2 border mt-8 border-gray-100 ">
        <div className="flex space-x-96 justify-end">
          <h3 className="  ">Basic Detail</h3>
          <div onClick={handleToggle}>
            <Icon name="arrowUp" size="25" color="darkblue" />
          </div>
        </div>
      </div>

      {show && (
        <div className="flex p-10 mb-6 relative  rounded-md  bg-transparent text-blue-900 underline  ">
          <ul className="flex flex-wrap grid-cols-2 p-8 w-full justify-around" >
            <li className=" p-20 bg-gray-200">
              <Icon name="bedIcon" size="25" color="darkblue" />
            </li>
            <li className=" p-20 bg-gray-200" >
              <Icon name="groupIcon" size="25" color="darkblue" />
            </li>
            <li className=" p-20 bg-gray-200">
              <Icon name="warehouseIcon" size="25" color="darkblue" />
            </li>
          </ul>
        </div>
      )}
    </div>
    // <div className="relative block w-full mb-6 bg-white p-0 rounded-md">
    //   <div className="p-4 border-none">
    //   <a
    //       className="text-blue-900 underline bg-transparent"
    //       data-bs-toggle="collapse"
    //       data-bs-parent="#basicinfo"
    //       href="#basicinfo"
    //       aria-controls="basicinfo"
    //       aria-expanded="false"
    //     >
    //       <h4 className="property-block_title">Basic Detail</h4>
    //     </a>
    //   </div>
    //   <div id="basicinfo" className="panel-collapse collapse show" aria-labelledby="basicinfo">
    //     <div className="detail-bloc-body">
    //       <div className="grid grid-cols-2 gap-4">
    //         <div className="col-span-1">
    //           <div className="ilio-icon-wrap">
    //             <div className="ilio-icon">
    //              <basic
    //             </div>
    //             <div className="ilio-text">3</div>
    //           </div>
    //         </div>
    //         <div className="col-span-1">
    //           <div className="ilio-icon-wrap">
    //             <div className="ilio-icon">
    //               <i className="fa-solid fa-layer-group"></i>
    //             </div>
    //             <div className="ilio-text">4,240</div>
    //           </div>
    //         </div>
    //         <div className="col-span-1">
    //           <div className="ilio-icon-wrap">
    //             <div className="ilio-icon">
    //               <i className="fa-solid fa-warehouse"></i>
    //             </div>
    //             <div className="ilio-text">1</div>
    //           </div>
    //         </div>
    //         <div className="col-span-1">
    //           <div className="ilio-icon-wrap">
    //             <div className="ilio-icon">
    //               <i className="fa-solid fa-building-circle-check"></i>
    //             </div>
    //             <div className="ilio-text">Active</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   </div>
  );
};

export default BasicDetail;

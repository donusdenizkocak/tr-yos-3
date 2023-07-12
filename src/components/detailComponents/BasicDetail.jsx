import React, { useState } from "react";
import { Icon } from "../../helper/Icons";

const BasicDetail = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <div className="container">
      <div className="flex space-x-72">
        <h3>Basic Detail</h3>
        <div onClick={handleToggle}>
          <Icon name="arrowUp" size="25" color="black" />
        </div>
      </div>

      {show && (
        <div>
          <h1>adddd</h1>
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

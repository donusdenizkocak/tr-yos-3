import React from "react";
import { Icon } from "../../helper/Icons";

const DepartmentUnvCard = () => {
  return (
    <>
      <div>
        <button className=" w-40 mt-2 mr-3 p-3 ml-3 text-sm font-medium border-2 border-orange-500 rounded-md bg-red-100 text-red-500 hover:bg-red-500 hover:text-white">
          H Add Favorite
        </button>
      </div>


      <div className="flex flex-col bg-gray-100 p-4 w-80">


        <div className="flex items-center mb-10">
          <div className="flex-shrink-0">
            <img src="https://www.tr-yös.com/test/6984215678913/logo/acibadem-mehmet-ali-aydinlar-universitesi-logo-1683762727498.png"
              className="w-16 h-16 rounded-full"
              alt="" />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-bold">
              ACIBADEM MEHMET ALI AYDINLAR UNIVERSITY
            </h4>
            <p className="text-gray-600 text-xs">K Istanbul</p>
          </div>
        </div>

        <div>
          <div>
            <div>
              <Icon name="fav"/>
            </div>
            <div className="ml-2 mb-5">
              <h6 className="font-bold">Call Us</h6>
              <p>
                <a className="text-xs hover:text-sky-500" href="tel:(216) 500-4444">(216) 500-4444</a>
              </p>
            </div>
          </div>

          <div>
            <div>
              <Icon name="fav"/>
            </div>
            <div className="ml-2 mb-5">
              <h6 className="font-sm font-bold">E-Mail</h6>
              <p>
                <a className="text-xs hover:text-sky-500" href="mailto:info@acibadem.edu.tr">info@acibadem.edu.tr</a>
              </p>
            </div>
          </div>
            
          <div>
            <div>
              <Icon name="fav" size="35"/>
            </div>
            <div className="ml-2 mb-5">
              <h6 className="font-sm font-bold">Website</h6>
              <p>
                <a className="text-xs hover:text-sky-500" href="https://www.acibadem.edu.tr" target="_blank">https://www.acibadem.edu.tr</a>
              </p>
            </div>
          </div>
            

        </div>

        <div>
        <button className="w-full mt-2 p-3 text-sm font-medium border-2 border-green-500 rounded-md bg-green-100 text-green-500 hover:bg-green-500 hover:text-white">
            M Send Message
          </button>
        </div>
      </div>




    </>
  );
};

export default DepartmentUnvCard;

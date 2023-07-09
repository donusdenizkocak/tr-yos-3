import React from "react";

const navigations = ["About Us", "FAQs Page", "Checkout", "Contact", "Blog"];
const myAccount = ["My Profile", "My Account", "Favorites"];

const Footer = () => {
  return (
    <div className=" bg-darkBlue">
      <div className="h-full grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 container mx-auto ">
        <div className="p-11">
          <p className="text-white pb-2 text-sm w-52 py-2 px-3 mb-3">
            1600 Amphitheatre Parkway Mountain View, CA 94043, USA.
          </p>
          <p className="bg-[#6398CA] text-white rounded-full italic font-bold w-52 py-2 px-4 mb-3">
            <span>P </span>+90 555 333 55 33
          </p>
          <p className="bg-[#6398CA] text-white rounded-full italic font-bold w-52 py-2 px-4">
            <span>M </span>info@tryös.com
          </p>
        </div>
        {/* ********** Navigations ********** */}

        <div className="p-11">
          <p className="text-gray-200 pb-2 font-semibold">Navigations</p>
          <div className="flex flex-col gap-5">
            {navigations.map((item, index) => (
              <a
                className="text-[#6398CA] text-sm font-medium"
                href="#"
                key={index}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* ********** MY ACCOUNT ********** */}

        <div className="p-11 ">
          <p className="text-white pb-2 font-semibold">My Account</p>
          <div className="flex flex-col gap-5">
            {myAccount.map((item,index) => (
              <a className="text-[#6398CA] text-sm font-medium" href="#" key={index}>
              {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center bg-darkBlue text-white text-sm font-medium pb-4">
        © 2023. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;

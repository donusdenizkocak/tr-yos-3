import React from "react";

const Footer = () => {
  return (
    <>
      <div className="h-full bg-darkBlue grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
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

        <div className="p-11">
          <p className="text-white pb-2 font-semibold">Navigations</p>
          <p className="pb-2">
            <a className="text-[#6398CA] text-sm font-medium" href="#">
              About Us
            </a>
          </p>
          <p className="pb-2">
            <a className="text-[#F578A2] text-sm font-medium" href="#">
              FAQs Page
            </a>
          </p>
          <p className="pb-2">
            <a className="text-[#F578A2] text-sm font-medium" href="#">
              Checkout
            </a>
          </p>
          <p className="pb-2">
            <a className="text-[#F578A2] text-sm font-medium" href="#">
              Contact
            </a>
          </p>
          <p className="pb-2">
            <a className="text-[#F578A2] text-sm font-medium" href="#">
              Blog
            </a>
          </p>
        </div>

        <div className="p-11 ">
          <p className="text-white pb-2 font-semibold">My Acoount</p>
          <p className="pb-2">
            <a className="text-[#F578A2] pb-2 text-sm font-medium" href="#">
              My Profile
            </a>
          </p>
          <p className="pb-2">
            <a className="text-[#F578A2] pb-2 text-sm font-medium" href="#">
              My Account
            </a>
          </p>
          <p className="pb-2">
            <a className="text-gray-300 pb-2 text-sm font-medium" href="#">
              Favorites
            </a>
          </p>
        </div>
      </div>

      <p className="text-center bg-darkBlue text-white text-sm font-medium pb-4">
        {" "}
        © 2023. All Rights Reserved.
      </p>
    </>
  );
};

export default Footer;

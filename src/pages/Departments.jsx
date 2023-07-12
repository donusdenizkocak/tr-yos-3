import React from "react";
import DepartmentsForm from "../components/departmentsComponents/DepartmentsForm";

import DeparmentsCard from "../components/departmentsComponents/DeparmentsCard";
import DepartmentUnvCard from "../components/departmentsComponents/DepartmentUnvCard";

const Departments = () => {
  return (
    <div className="flex flex-col gap-12 mb-12">
      <div
        className="h-[240px] w-full "
        style={{
          backgroundImage: "url(./image/bnr16.png)",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-full flex flex-col justify-end text-white md:mx-auto md:container pb-8">
          <h2 className=" font-bold text-[50px]">Our Departments</h2>
          <p className="text-sm font-medium">Your dream find the university</p>
        </div>
      </div>

      <div className="flex container mx-auto ">
        <div>
          <DepartmentsForm />
        </div>
        <div className="flex ">
          <DeparmentsCard />
        </div>
      </div>

      <DepartmentUnvCard/>
    </div>
  );
};

export default Departments;

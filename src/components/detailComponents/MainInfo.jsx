import { Icon } from "../../helper/Icons";

const MainInfo = ({ departments }) => {
  if (!departments) {
    return null;
  }

  const {
    department,
    faculty,
    language,
    data,
  } = departments;

  return (
    <div className="w-full ">
      {/* birinci kısım */}
      <div className="flex flex-col gap-5 ">
        <div className="flex rounded-md bg-white p-4 ">
          <div className="mr-4">
            <h2 className="text-xl text-darkBlue font-bold mb-2">
              {department?.tr}
            </h2>
            <h2 className="text-xl text-darkBlue font-bold mb-2">
              {faculty.tr}
            </h2>
            <div className="flex text-[12px] text-[#4F5E64] gap-2 mb-2">
              <Icon name="city" size="15" />
              <p className="">{data?.adress}</p>
            </div>
          </div>
        </div>

        {/* ikinci kısım */}

        <div className="rounded-md bg-white p-4 ">
          <h1 className="text-2xl font-bold mb-4 text-darkBlue">Other</h1>
          <div className="border border-success-400 rounded-md bg-success-100 grid grid-cols-4 ">
            <div className="border border-success-200 p-8">
              <h2>Language</h2>
              <h4 className=" text-success">{language}</h4>
            </div>
            <div className="border border-success-200 p-8">
              <h2>Year</h2>
              <h4 className=" text-success">4</h4>
            </div>
            <div className="border border-success-200 p-8">
              <h2>Quota</h2>
              <h4 className=" text-success">40</h4>
            </div>
            <div className="border border-success-200 p-8">
              <h2>Internships</h2>
              <h4 className=" text-success"></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;

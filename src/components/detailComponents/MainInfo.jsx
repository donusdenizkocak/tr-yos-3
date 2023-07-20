const MainInfo = ({ department }) => {

  if (!department) {
    return null;
  }

  const {
    tr: departmentName,
    faculty,
    content,
    language,
    university,
    price,
    scholarship,
   
  } = department;
  return (
    <div className="w-full ">
      {/* birinci kısım */}
      <div className="flex flex-col gap-5 ">
        <div className="flex rounded-md bg-white p-4 ">
          <div className="mr-4">
            <h2 className="text-xl text-darkBlue font-bold mb-2">
            {departmentName}
            </h2>
            <h2 className="text-xl text-darkBlue font-bold mb-2">
            {faculty.tr}
            </h2>
            <a href="#" className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
             
            </a>
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

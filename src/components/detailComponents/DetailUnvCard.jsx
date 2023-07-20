import { HomeContext } from "../../context/HomeContext";
import { Icon } from "../../helper/Icons";
import { useContext } from "react";

const DetailUnvCard = ({ department }) => {
  const {universities}=useContext(HomeContext)
  if (!department) {
    return null;
  }

  const {
    tr: departmentName,
    faculty,
    content,
    city,
    language,
    university,
    price,
    scholarship,
    data,
    // data: { adress, web, email, phone, fax },
  } = department;
  const filteredLogo=universities.filter((item)=>item.tr===city.tr).map((item)=>item.logo)
  // console.log(filteredLogo)
  return (
    <div className="flex flex-col  gap-5">
      <div className="bg-white flex  justify-center p-3 rounded-md ">
        <button className=" w-40  p-3  text-sm font-medium border-[1px] border-orange-500 rounded-md bg-red-100 text-red-500 hover:bg-red-500 hover:text-white">
          Add Favorite
        </button>
      </div>

      <div className="flex flex-col bg-white p-4 w-80">
        <div className="flex items-center mb-10">
          <div className="flex-shrink-0">
            <img
              src={filteredLogo}
              // className="w-16 h-16 rounded-full"
              className="w-16 h-16 rounded-full"
              alt=""
            />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-bold">
              {university.tr}
            </h4>
            <p className="text-gray-600 text-xs">{city.tr}</p>
          </div>
        </div>

        <div>
          <div>
            <div>{/* <Icon name="fav"/> */}</div>
            <div className="ml-2 mb-5">
              <h6 className="font-bold">Call Us</h6>
              <p>
                <a
                  className="text-xs hover:text-sky-500"
                  href="tel:(216) 500-4444"
                >
                {data?.phone}
                </a>
              </p>
            </div>
          </div>

          <div>
            <div>{/* <Icon name="fav"/> */}</div>
            <div className="ml-2 mb-5">
              <h6 className="font-sm font-bold">Email</h6>
              <p>
                <a
                  className="text-xs hover:text-sky-500"
                  href="mailto:info@acibadem.edu.tr"
                >
               {data?.email}
                </a>
              </p>
            </div>
          </div>

          <div>
            <div>{/* <Icon name="fav" size="35"/> */}</div>
            <div className="ml-2 mb-5">
              <h6 className="font-sm font-bold">Website</h6>
              <p>
                <a
                  className="text-xs hover:text-sky-500"
                  href="https://www.acibadem.edu.tr"
                  target="_blank"
                >
                   {data?.web}
                </a>
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
    </div>
  );
};

export default DetailUnvCard;

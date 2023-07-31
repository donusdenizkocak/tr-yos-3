
import React, { useContext, useEffect } from "react";

import { HomeContext } from "../../context/HomeContext";
import CompareDeprtCard from "./CompareDeprtCard";

const CompareDepartments = () => {

  const { compare,getCompare,userID,allDepartments,universities } = useContext(HomeContext);
  console.log(compare)
  const filterCompare=allDepartments?.filter((item) => compare?.includes(item.id))
 

  const image=universities?.filter((item) => compare?.includes(item.id))
  const universityImagesMap = image?.reduce((map, university) => {
    if (university && university.images && university.images.length > 0) {
      map[university.tr] = university.images[0];
    }
    return map;
  }, {}); 

//   const { selectedItems, allDepartments, compare } = useContext(HomeContext);
//   console.log(allDepartments);

//   const records = allDepartments.filter((item) => compare.includes(item.id));
//   console.log(records);


  return (
    <>
    <div className="bg-[#f8f6f6]">
      <div
        className="h-[240px] w-full "
        style={{
          backgroundImage: "url(./image/bnr4.jpg)",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-full flex flex-col justify-end text-white mx-auto md:container pb-8 ">
          <h2 className=" font-bold text-[50px]">Compare Universities</h2>
          <p className="text-sm font-medium">
            İstediğiniz bölümleri karşılaştırabilirsiniz
          </p>
        </div>

        </div> 

      <div className="flex items-center flex-wrap gap-5 ">
        {filterCompare?.map((item) => (
          <CompareDeprtCard item={item} key={item.id}  
           universityImage={universityImagesMap}
          />
        ))}
      </div>
      </div>    
    </>
  )
}

     

//       <div className="flex flex-wrap justify-center ">
//         {records.map((item, i) => (
//           <CompareDeprtCard {...item} key={i} />
//         ))}
//       </div>
//     </div>
//   );
// };

export default CompareDepartments;

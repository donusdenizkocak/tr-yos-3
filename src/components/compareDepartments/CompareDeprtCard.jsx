
import { useContext } from "react";
import { HomeContext } from "../../context/HomeContext";

 const CompareDeprtCard = ({item,universityImage}) => {
  // const {id,city:{tr},university:{tr}}=item 
   console.log(item)
   
   const {userID,handleDelete}=useContext(HomeContext)
  
   const departmentName = item?.university?.tr;

   const departmentImage = Object.entries(universityImage).find(
     ([universityName, imageUrl]) =>
       universityName.trim().toLowerCase() ===
       departmentName?.trim().toLowerCase()
   )?.[1];

   return(
    <>
   
    <div className="max-w-sm bg-white border border-gray-400 rounded-lg p-4 shadow m-5 relative">
           <button className=" bg-gray-100 font-bold p-2 text-center rounded-full absolute top-2 right-2" onClick={() => handleDelete(item?.id)}>
              X
            </button>
    <a href="#">
      <img
        className="rounded-t-lg"
        src={departmentImage ||
          "https://iatkv.tmgrup.com.tr/c4c003/616/321/0/0/800/416?u=https%3A%2F%2Fitkv.tmgrup.com.tr%2F2020%2F08%2F07%2Fmaas-gibi-burs-destegi-1596775964948.jpeg"}
        alt=""
      />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 border-b-2 p-4 text-center ucnokta">

          {item?.department?.tr ? item?.department?.tr : "Departman" }

        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-900  border-b-2 p-4 text-center ucnokta">
        {item?.faculty?.tr}
      </p>
      <p className="mb-3 font-normal text-gray-900  border-b-2 p-4 text-center ucnokta">
        {item?.university.tr}
      </p>
      <p className="mb-3 font-normal text-gray-700  border-b-2 p-4 text-center">
        {item?.city?.tr ? item?.city?.tr : " Türkiye" }
      </p>
      <p className="mb-3 font-normal text-gray-700  border-b-2 p-4 text-center">
        Türkiye
      </p>
      <p className="mb-3 font-normal text-gray-700  p-4 text-center">
        $/Price
      </p>      
// =======
// const CompareDeprtCard = ({
//   university,
//   faculty,
//   department,
//   language,
//   id,
// }) => {
//   return (
//     <div
//       className="max-w-sm flex flex-col justify-between bg-white border border-gray-400 rounded-lg p-4 shadow m-5"
//       key={id}
//     >
//       <img
//         className="rounded-t-lg"
//         src="https://cdn.pixabay.com/photo/2021/02/18/12/03/people-6027028_1280.jpg"
//         alt=""
//       />

//       <div className="p-5 h-full flex flex-col justify-between">
//         <a href="#">
//           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 border-b-2 p-4 text-center">
//             {department?.tr}
//           </h5>
//         </a>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 border-b-2 p-4 text-center">
//           {faculty?.tr}
//         </p>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 border-b-2 p-4 text-center">
//           {university?.tr}
//         </p>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 border-b-2 p-4 text-center">
//           $15000 / year
//         </p>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 border-b-2 p-4 text-center">
//           {language || "Turkish"}
//         </p>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4 text-center">
//           4 Years
//         </p>

      </div>
    </div>
    </>
  );
};
export default CompareDeprtCard;

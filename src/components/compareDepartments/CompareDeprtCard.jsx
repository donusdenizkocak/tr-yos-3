import React from 'react'

 const CompareDeprtCard = (item) => {
    console.log(item)
    const {id, data, logo, tr, images} =item;
  return (
    <div className="max-w-sm bg-white border border-gray-400 rounded-lg p-4 shadow m-5">
    <a href="#">
      <img
        className="rounded-t-lg"
        src={images ? images[0]:logo}
        alt=""
      />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 border-b-2 p-4 text-center">
          {tr}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 border-b-2 p-4 text-center">
        Faculty Of Arts And Sciences
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 border-b-2 p-4 text-center">
       {tr}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 border-b-2 p-4 text-center">
        $15000 / year
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 border-b-2 p-4 text-center">
        Turkish
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4 text-center">
        4 Years
      </p>
      
    </div>
  </div>
  )
}
export default CompareDeprtCard
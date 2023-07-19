import React, { useContext } from 'react'
import { HomeContext } from '../../context/HomeContext';
import CompareDeprtCard from './CompareDeprtCard';

 const CompareDepartments = () => {
  const {selectedItems, setSelectedItems} = useContext(HomeContext)
  return (
    <div className='bg-[#f8f6f6]'>
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

  <div>
  {selectedItems.map((item,i)=> <CompareDeprtCard item={item} key={i}/>)}
  </div>
      
     

  

    </div>

  )
}
export default CompareDepartments;
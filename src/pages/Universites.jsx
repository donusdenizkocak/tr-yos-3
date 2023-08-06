import CardUniversites from "../components/universitesComponents/CardUniversites";
import { motion } from "framer-motion";
import { HomeContext } from "../context/HomeContext";
import { useContext } from "react";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import ImageSpinner from "../helper/Spinner-2.gif";

const framerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Universites = () => {
  const { universities, cities } = useContext(HomeContext);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(universities.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(universities.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, universities]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % universities.length;   
    setItemOffset(newOffset);
  };

  if (isLoading) {
    return (
      <>
        <div
          className="h-[240px] w-full "
          style={{
            backgroundImage: "url(./image/bnr4.jpg)",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="h-full flex flex-col justify-end text-white mx-auto md:container pb-8">
            <h2 className=" font-bold text-[50px] ">Universites</h2>
            <p className="text-sm font-medium">
              Tüm Üniversiteleri Kontrol Edebilirsiniz
            </p>
          </div>
        </div>
        <div className="min-h-screen flex justify-center items-center">
          <img src={ImageSpinner} />
        </div>
      </>
    );
  } else {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div
          className="h-[240px] w-full "
          style={{
            backgroundImage: "url(./image/bnr4.jpg)",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="h-full flex flex-col justify-end text-white mx-auto md:container pb-8">
            <h2 className=" font-bold text-[50px] ">Universites</h2>
            <p className="text-sm font-medium">
              Tüm Üniversiteleri Kontrol Edebilirsiniz
            </p>
          </div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={framerContainer}
          className="container flex flex-col justify-center items-center mx-auto  my-5 gap-5 w-full"
        >
          {currentItems.map((uni, index) => (
            <CardUniversites {...uni} key={index} cities={cities} />
          ))}
        </motion.div>

        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
      </motion.div>
    );
  }
};

export default Universites;

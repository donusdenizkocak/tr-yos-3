import ReactPaginate from "react-paginate";
import { Icon } from "../helper/Icons";

const Pagination = ({ handlePageClick, pageCount }) => {
  return (
    <div className="border-t sm:p-4">
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <span className="sm:w-20 md:before:content-['next'] h-10 flex items-center justify-center bg-[#022f5d] text-white rounded-md ">
            <Icon name="rightpagination" size="1.5rem" color="white" />
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={
          <span className=" sm:w-20 md:after:content-['prev']  h-10 flex items-center justify-center bg-[#022f5d] text-white rounded-md ">
            <Icon name="letfpagination" size="1.5rem" color="white" />
          </span>
        }
        renderOnZeroPageCount={null}
        marginPagesDisplayed={2}
        containerClassName=""
        pageLinkClassName="w-full h-full flex justify-center items-center"
        previousLinkClassName="w-full h-full flex justify-center items-center"
        nextLinkClassName="w-full h-full flex justify-center items-center"
        activeClassName="bg-[#022f5d] text-white"
        className="text-gray-600 flex justify-center items-center gap-1 sm:gap-4"
        pageClassName="block border border-solid border-gray-400 hover:bg-gray-400 w-5  sm:w-10  sm:h-10 flex items-center justify-center rounded-md "
      />
    </div>
  );
};

export default Pagination;

import ReactPaginate from "react-paginate";

const Pagination = ({ handlePageClick, pageCount }) => {
  return (
    <div className="border-t p-4">
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <span className="w-16 h-10 flex items-center justify-center bg-[#022f5d] text-white rounded-md ">
            next ▶
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={
          <span className="w-16 h-10 flex items-center justify-center bg-[#022f5d] text-white rounded-md ">
            ◀ prev
          </span>
        }
        renderOnZeroPageCount={null}
        marginPagesDisplayed={2}
        containerClassName=" "
        pageLinkClassName="w-full h-full flex justify-center items-center"
        previousLinkClassName="w-full h-full flex justify-center items-center"
        nextLinkClassName="w-full h-full flex justify-center items-center"
        activeClassName="bg-[#022f5d] text-white"
        className="text-gray-600 flex justify-center items-center gap-4"
        pageClassName="block border border-solid border-gray-400 hover:bg-gray-400 w-10 h-10 flex items-center justify-center rounded-md mr-4"
      />
    </div>
  );
};

export default Pagination;

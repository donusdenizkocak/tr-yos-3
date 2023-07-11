import { Icon } from "../../helper/Icons";

const DeparmentsIntro = ({ id, bolum, fakulte, universty, image }) => {
  return (
    <div
      className=" bg-white border border-gray-200 rounded-lg shadow text-center"
      key={id}
    >
      <a href="#">
        <img className="rounded-t-lg w-96 h-36" src={image} alt="image" />
      </a>
      <div>
        <div className="relative h-5">
        <Icon name="fav" size="35" />
        </div>
        <div className="p-2 ">
          <a href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 hover:text-sky-400">
              {bolum}
            </h5>
          </a>
          <a href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 hover:text-sky-400">
              {fakulte}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-800 uppercase">
            <span className="">{universty}</span>
          </p>
          {/* <a
              href="#"
              className="inline-flex items-center  p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a> */}
        </div>
      </div>
      <hr />
      <div className="flex justify-between p-3 text-xs">
        <div className="flex">
         
          <Icon name="marker" size="20"/>
          <p className="">Ankara</p>
        </div>
        <div className="flex">
        <Icon name="payment" size="25"/>
          <div>
            &nbsp;30000 <span className="font-bold">/</span>year
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeparmentsIntro;

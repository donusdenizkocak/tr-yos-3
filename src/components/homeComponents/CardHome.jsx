import { useContext, useState } from "react";
import { HomeContext } from "../../context/HomeContext";

const CardHome = ({ id, data, logo, tr, images }) => {
const {selectedItems,setSelectedItems} =useContext(HomeContext)

console.log(selectedItems)
  return (
    <div
      className=" bg-white border border-gray-200 rounded-lg shadow w-96 h-[420px]"
      key={id}
    >
      <div className="relative">
        <img
          className="rounded-t-lg w-full h-[15rem] object-scale-down"
          src={logo}
          alt="image"
        />
        <button className="absolute bottom-2 right-2 flex gap-1 z-10  p-1 rounded-lg border font-semibold bg-green-200" onClick={(e)=> setSelectedItems([...selectedItems, e.target])}>
          <span className="pt-1">
            <svg
              fill="#000000"
              height="1rem"
              width="1rem"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 51.4 51.4"
              xmlSpace="preserve"
              stroke="#000000"
              strokeWidth="0.7196"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path d="M1.7,25.2c0.553,0,1-0.447,1-1c0-6.065,4.935-11,11-11h24v8.964L51.4,12.2L37.7,2.236V11.2h-24c-7.168,0-13,5.832-13,13 C0.7,24.753,1.147,25.2,1.7,25.2z" />
                  <path d="M49.7,26.2c-0.553,0-1,0.447-1,1c0,6.065-4.935,11-11,11h-24v-8.964L0,39.2l13.7,9.964V40.2h24c7.168,0,13-5.832,13-13 C50.7,26.647,50.253,26.2,49.7,26.2z" />
                </g>
              </g>
            </svg>
          </span>
          <span>Compare</span>
        </button>
      </div>

      <div>
        <div className="relative h-5">
          <svg
            className=" w-32 h-7 absolute top-2 -right-7  text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 576 512"
          >
            <path d="M256 368C256 403.7 266.6 436.9 284.9 464.6L279.4 470.3C266.4 483.2 245.5 483.2 233.5 470.3L39.71 270.5C-16.22 212.5-13.23 116.6 49.7 62.68C103.6 15.73 186.5 24.72 236.5 75.67L256.4 96.64L275.4 75.67C325.4 24.72 407.3 15.73 463.2 62.68C506.1 100.1 520.7 157.6 507 208.7C484.3 198 458.8 192 432 192C334.8 192 256 270.8 256 368zM576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM476.7 324.7L416 385.4L387.3 356.7C381.1 350.4 370.9 350.4 364.7 356.7C358.4 362.9 358.4 373.1 364.7 379.3L404.7 419.3C410.9 425.6 421.1 425.6 427.3 419.3L499.3 347.3C505.6 341.1 505.6 330.9 499.3 324.7C493.1 318.4 482.9 318.4 476.7 324.7H476.7z" />
          </svg>
        </div>

        <div className="p-2 ">
          <a href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 hover:text-sky-400">
              {tr}
            </h5>
          </a>
          <a href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 hover:text-sky-400">
              FATÜLTE
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-800 uppercase">
            <span className="">ÜNİVERSİTE</span>
          </p>
        </div>
      </div>
      <hr />
      <div className="flex justify-between p-3 text-xs">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="currentColor"
            className="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          <p className="">Ankara</p>
        </div>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            width="1.5rem"
            viewBox="0 0 576 512"
          >
            <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zM272 192H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 304c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16zM164 152v13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-4.8 2.8-6.2 5.6-6.2 9.3c0 1.8 .1 3.5 5.3 6.7c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c.3 20.9-10.5 36.1-24.8 45c-7.2 4.5-15.2 7.3-23.2 9V360c0 11-9 20-20 20s-20-9-20-20V345.4c-10.3-2.2-20-5.5-28.2-8.4l0 0 0 0c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c4.1-2.5 6-5.5 5.9-10.5c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-12.7-7.7-24.6-20.5-24.7-40.7c-.1-21.1 11.8-35.7 25.8-43.9c6.9-4.1 14.5-6.8 22.2-8.5V152c0-11 9-20 20-20s20 9 20 20z" />
          </svg>
          <div>
            30000 <span className="font-bold">/</span>year
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardHome;

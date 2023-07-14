import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../helper/Icons";
import { Offcanvas, Ripple, initTE } from "tw-elements";

const navbarMenu = [
  { title: "Home", url: "/" },
  { title: "Universites", url: "/universites" },
  { title: "Departments", url: "/departments" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    initTE({ Offcanvas, Ripple });

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full  top-0 z-[100] py-3 bg-opacity-100 shadow-lg  ${
          isScrolled
            ? "bg-white border-b border-[#e9ecef] fixed animate-wiggle"
            : "bg-[#00000080] absolute"
        }`}
      >
        <div className="w-full md:container md:mx-auto flex items-center  justify-between mt-0 px-6 py-2">
          <button
            type="button"
            data-te-offcanvas-toggle
            data-te-target="#offcanvasTop"
            aria-controls="offcanvasTop"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="cursor-pointer md:hidden block"
          >
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          <input className="hidden" type="checkbox" id="menu-toggle" />
          <div
            className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
            id="menu"
          >
            <nav>
              <ul className="md:flex items-center justify-between text-base pt-4 md:pt-0">
                <li>
                  {navbarMenu.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className={`inline-block no-underline transition delay-75 hover:text-[#017efa] font-semibold text-sm py-2 px-4 lg:ml-2 ${
                        isScrolled ? "text-[#022f5d]" : "text-white"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </li>
              </ul>
            </nav>
          </div>
          <div
            className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
            id="nav-content"
          >
            <div className="w-[115px] flex items-center  h-[50px]">
              <Link
                to="/login"
                className="w-full  h-[50px] bg-[#022f5d] text-white flex justify-center items-center  rounded text-sm font-semibold"
              >
                <Icon name="login" size="25" color="white" />
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="invisible fixed left-0 right-0 top-0 z-[1045] flex h-1/3 max-h-full max-w-full -translate-y-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out  [&[data-te-offcanvas-show]]:transform-none"
        tabIndex={-1}
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
        data-te-offcanvas-init
      >
        <div className="flex items-center justify-between p-4 ">
          {/* <h5
            className="mb-0 font-semibold leading-normal"
            id="offcanvasTopLabel"
          >
            Offcanvas top
          </h5> */}
          <ul className=" h-full flex flex-col justify-center  ">
        <li className=" mb-0 p-2 font-semibold leading-normal">
          <a href="/" className=" no-underline text-darkBlue text-xl hover:text-blue-700" >HomePage</a>
        </li>
        <li className=" mb-0 p-2 font-semibold leading-normal">
          <a href="/" className=" no-underline text-darkBlue text-xl hover:text-blue-700" >Universites</a>
        </li>
        <li className=" mb-0 p-2 font-semibold leading-normal">
          <a href="/" className=" no-underline text-darkBlue text-xl hover:text-blue-700">Departments</a>
        </li>
      </ul>
          <button
            type="button"
            className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-offcanvas-dismiss
          >
            <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

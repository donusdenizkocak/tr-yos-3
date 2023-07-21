import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../helper/Icons";
import { Offcanvas, Dropdown, Ripple, initTE } from "tw-elements";
import { AuthContext } from "../context/AuthContext";
import BarMenu from "./BarMenu";

const navbarMenu = [
  { title: "Home", url: "/" },
  { title: "Universites", url: "/universites" },
  { title: "Departments", url: "/departments" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openBarMenu, setOpenBarMenu] = useState(false);

  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
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
            className="cursor-pointer md:hidden block"
            onClick={() => setOpenBarMenu(true)}
          >
            <svg
              className={`fill-current  ${
                isScrolled ? "text-black" : "text-white"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          <BarMenu setOpenBarMenu={setOpenBarMenu} openBarMenu={openBarMenu} />
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
                      className={`inline-block no-underline transition delay-75 hover:text-[#017efa] font-semibold text-sm py-2 px-4 ${
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
            className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4 relative"
            id="nav-content"
          >
            {!currentUser && (
              <div className="w-[115px] flex items-center  h-[50px]">
                <Link
                  to="/login"
                  className="w-full  h-[50px] bg-[#022f5d] text-white flex justify-center items-center  rounded text-sm font-semibold"
                >
                  <Icon name="login" size="25" color="white" />
                  Sign In
                </Link>
              </div>
            )}
            {currentUser && (
              <div  className="w-[115px] flex items-center justify-center h-[50px]">
               <Link to="/myaccount" className={`w-full h-full flex items-center justify-center transition delay-75 hover:text-[#017efa] font-semibold ${
                        isScrolled ? "text-[#022f5d]" : "text-white"
                      }`}>MyAccount ▼</Link> 

              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navbarMenu = [
  { title: "Home", url: "/" },
  { title: "Universites", url: "/universites" },
  { title: "Departments", url: "/departments" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <nav
      className={`w-full  top-0 z-[100] py-3 bg-opacity-100 shadow-lg  ${
        isScrolled
          ? "bg-white border-b border-[#e9ecef] fixed animate-wiggle"
          : "bg-[#00000080] absolute"
      }`}
    >
      <div className="w-full md:container md:mx-auto flex items-center  justify-between mt-0 px-6 py-2">
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
          <svg
            className="fill-current text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </label>
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
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const DropDownNavbar = ({ isScrolled }) => {
  const [open, setOpen] = useState(false);
  const { logoutUser } = useContext(AuthContext);
  return (
    <div className="relative">
      <div
        className="w-[115px] flex items-center justify-center h-[50px]"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Link
          className={`w-full h-full flex items-center justify-center transition delay-75 hover:text-[#017efa] font-semibold ${
            isScrolled ? "text-[#022f5d]" : "text-white"
          }`}
        >
          MyAccount ▼
        </Link>
      </div>

      {/* Dropdown menu */}
      {open && (
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className={`z-[150] ${
            open ? "visible" : "hidden"
          }   bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-15 right-1 `}
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <Link
                onClick={() => setOpen(!open)}
                to="/myaccount"
                className="block px-4 py-2  text-gray-700 hover:bg-gray-100"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpen(!open)}
                to="/compare"
                className="block px-4 py-2  text-gray-700 hover:bg-gray-100 "
              >
                Compare
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpen(!open)}
                to="/favori"
                className="block px-4 py-2  text-gray-700 hover:bg-gray-100"
              >
                Favori
              </Link>
            </li>
          </ul>
          <div className="py-2" onClick={logoutUser}>
            <Link
              onClick={() => setOpen(!open)}
              to="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
            >
              Logout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownNavbar;

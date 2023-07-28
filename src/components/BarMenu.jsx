import { Link } from "react-router-dom";
import { Icon } from "../helper/Icons";

const navbarMenu = [
  { title: "Home", url: "/" },
  { title: "Universites", url: "/universites" },
  { title: "Departments", url: "/departments" },
];

const BarMenu = ({ setOpenBarMenu, openBarMenu }) => {
  if (openBarMenu) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }

  return (
    <div
      className={`fixed w-[100wh] h-[100vh]  inset-0 top-0 bottom-0 left-0 right-0 z-[150] transition-colors overflow-y-hidden ${
        openBarMenu ? "visible bg-black/50 " : "invisible"
      } `}
      onClick={() => setOpenBarMenu(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white shadow  p-6 transition-all block  ${
          openBarMenu ? " opacity-100" : " opacity-0"
        } `}
      >
        <div className="flex justify-between items-center ">
          <h2 className=" text-xl  font-bold text-blue-700">MENÜ</h2>
          <button onClick={() => setOpenBarMenu(false)}>
            <Icon name="close" size="2rem" />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center  gap-2 mt-4  ">
          {navbarMenu.map((i, j) => (
            <Link
              className="border-b w-full flex justify-center font-bold  text-darkBlue text-lg hover:text-blue-700"
              to={i.url}
              key={j}
              onClick={() => setOpenBarMenu(false)}
            >
              {i.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarMenu;

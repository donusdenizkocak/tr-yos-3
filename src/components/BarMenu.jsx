import { Link } from "react-router-dom";

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
      className={`fixed w-[100wh] h-[100vh]  inset-0 top-0 bottom-0 left-0 right-0 z-[150] transition-colors overflow-y-hidden  ${
        openBarMenu ? "visible bg-black/50 " : "invisible"
      } `}
      onClick={() => setOpenBarMenu(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white shadow  p-6 transition-all ${
          openBarMenu ? " opacity-100" : " opacity-0"
        } `}
      >
        <div className="text-end">
          <button onClick={() => setOpenBarMenu(false)}>X</button>
        </div>
        <div className="flex flex-col justify-center gap-2">
          {navbarMenu.map((i, j) => (
            <Link to={i.url} onClick={() => setOpenBarMenu(false)}>
              {i.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarMenu;
